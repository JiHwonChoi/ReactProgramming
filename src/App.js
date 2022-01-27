
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Contents"
import Contents from './components/Contents';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
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
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
          </Subject>
          <TOC data = {this.state.contents}></TOC>
          {/* TOC의 링크를 클릭하면 url이 바뀌긴 하는데 그렇다로 리로드가 되진 않네? 왜 내가 아는 페이지 넘어가는거랑 다르지 */}
          <Contents title ={_title} desc={_desc}></Contents>

      </div>
    );
  }
}

export default App;
