
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContents from './components/ReadContents';
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
      // _title=data.title
      // _desc=data.desc
      return data
      
    }       
    i+=1
  }
  
}
getContent(){
  if(this.state.mode==='welcome'){
    _title=this.state.welcome.title
    _desc=this.state.welcome.desc
    _article=<ReadContents title ={_title} desc={_desc}></ReadContents>
  }

  // Read 상태일때
  else if (this.state.mode==='read'){
    // var i = 0

    //setState로 state변경된 후에 화면에 띄워줄 정보 선택하기
    // while(i<this.state.contents.length){
    //   var data = this.state.contents[i]
    //   if(data.id === this.state.selected_content_id){
    //     _title=data.title
    //     _desc=data.desc
    //     break
    //   }       
    //   i+=1
    // }
    var _data = this.getReadContent()
    _article=<ReadContents title ={_data.title} desc={_data.desc}></ReadContents>
  }

  // Create 상태일때
  else if (this.state.mode==='create'){
    _article=<CreateContents onSubmit={function(_title, _desc){
      console.log(_title)
      console.log(_desc)
      this.max_content_id+=1
      var _content = this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      )
      this.setState(
        this.state.contents=_content
      )
    }.bind(this)}></CreateContents>
  }

  return _article
}

  render(){
    var _title, _desc, _article= null

    // 기본상태일때
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
      _article=<ReadContents title ={_title} desc={_desc}></ReadContents>
    }

    // Read 상태일때
    else if (this.state.mode==='read'){
      var i = 0

      //setState로 state변경된 후에 화면에 띄워줄 정보 선택하기
      while(i<this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id){
          _title=data.title
          _desc=data.desc
          break
        }       
        i+=1
      }
      _article=<ReadContents title ={_title} desc={_desc}></ReadContents>
    }

    // Create 상태일때
    else if (this.state.mode==='create'){
      _article=<CreateContents onSubmit={function(_title, _desc){
        console.log(_title)
        console.log(_desc)
        this.max_content_id+=1
        var _content = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState(
          this.state.contents=_content
        )
      }.bind(this)}></CreateContents>
    }
    
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
