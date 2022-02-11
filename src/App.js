
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContents from './components/ReadContents';
import UpdateContents from './components/UpdateContents';
import CreateContents from './components/CreateContents';
import Control from './components/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id =3;
    this.state={
      mode:'create',
      selected_content_id:2,
      welcome:{title:'welcome', desc:'hello react'},
      subject:{title:'WEB', sub:'World Wide Web !'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JaavaScripts', desc:'JavaScript is for ineractive'},
      ]
    }
  }
getReadContent(){
  var i =0
  while(i<this.state.contents.length){
    var data = this.state.contents[i]
    if(data.id === this.state.selected_content_id){
      return data
      
    }       
    i+=1
  }
  
}
getContent(){
  if(this.state.mode==='welcome'){
    var _title=this.state.welcome.title
    var _desc=this.state.welcome.desc
    var _article=<ReadContents title ={_title} desc={_desc}></ReadContents>
  }

  // Read 상태일때
  else if (this.state.mode==='read'){

    var _data = this.getReadContent()
    var _article=<ReadContents title ={_data.title} desc={_data.desc}></ReadContents>
  }

  // Create 상태일때
  else if (this.state.mode==='create'){
    var _article=<CreateContents onSubmit={function(_title, _desc){
      console.log(_title)
      console.log(_desc)
      this.max_content_id+=1
      var _content = this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      )
      this.setState({
        contents:_content,
        selected_content_id:this.max_content_id,
        mode:'read'
        
      }
      )
    }.bind(this)}></CreateContents>
  }

  // Update
  else if (this.state.mode==='update'){
    var _data = this.getReadContent()
    var _article = <UpdateContents data={_data} onSubmit={function(_id,_title, _desc){
      var i =0
      var _contents = Array.from(this.state.contents)
      while (i<this.state.contents.length){
        if(_id===this.state.contents[i].id){
          _contents[i]={id:_id, title:_title, desc:_desc}
          break
        }
        i+=1
      }
      this.setState({
        contents:_contents,
        mode:'read'
      }
      )
    }.bind(this)}></UpdateContents>
  }

  return _article
}

  render(){
   
    
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
              this.setState({
                mode:'welcome'
              })
          }.bind(this)}>
          </Subject>

          <TOC 
              data = {this.state.contents}
              onChangePage = {function(id){
                
                this.setState({
                  mode:'read',
                  selected_content_id: Number(id)  
                })
              }.bind(this)}></TOC>
          <Control onChangeMode={function(_mode){
            this.setState({
              mode:_mode
            })
          }.bind(this)}></Control>
          {/* TOC의 링크를 클릭하면 url이 바뀌긴 하는데 그렇다로 리로드가 되진 않는다. 
          e.PreventDfault 때문인데, 주소는 바뀌지만 페이지가 리로드 되지 않음 */}
          
          {this.getContent()}
          {/* CRUD 상태에 따라서 다른 article 이 오도록 한다 */}

      </div>
    );
  }
}

export default App;
