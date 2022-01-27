
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Contents from './components/Contents';

class App extends Component{
  constructor(props){
    super(props);
    var flag =1
    this.state={
      mode:'read',
      welcome:{title:'welcome', desc:'hello react'},
      subject:{title:'WEB', sub:'World Wide Web !'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JaavaScripts', desc:'JavaScript is for ineractive'},
      ]
    }
  }
  render(){
    var _title, _desc = null
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title
      _desc=this.state.welcome.desc
    }
    else if (this.state.mode==='read'){
      _title=this.state.contents[0].title
      _desc=this.state.contents[0].desc
    }
    
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
          </Subject> */}

            <article>
                <h2><a href="/" onClick={function(e){
                  e.preventDefault()
                  if(this.flag==1){
                    this.flag = 0
                    this.setState({
                      mode:'welcome'
                    })
                    console.log('flag=1')
                  }
                  else {
                    this.setState({
                      mode:'read'
                    })
                    this.flag = 1
                    console.log('flag=0')
                  }
                  
                }.bind(this)}>{this.state.subject.title}</a></h2>
                {this.state.subject.sub}
            </article>
            {/* flag 를 이용해서 왔다갔다 하고 싶다. 근데 setState 될 때 마다 render()함수가 다시 돌아가면서
            flag 를 초기화 시켜서 flag값이 항상 일정하게 나온다. render의 영향없는 flag값을 어디서 설정하지?
            해결방법: constructor에 flag를 집어넣어서 class의 인자로써 flag를 설정하였다. 이걸로 껏다 켰다하는 스위치의 역할을 하게 했다. */}
          <TOC data = {this.state.contents}></TOC>
          {/* TOC의 링크를 클릭하면 url이 바뀌긴 하는데 그렇다로 리로드가 되진 않네? 왜 내가 아는 페이지 넘어가는거랑 다르지 */}
          <Contents title ={_title} desc={_desc}></Contents>

      </div>
    );
  }
}

export default App;
