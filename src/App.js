import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  // state  값 초기화 - render() 보다 먼저 실행되며 값이 초기화됨
  // 함수가 실행될 때 constructor 가 있다면 제일 먼저 실행된다 ! 
  constructor(props){
    super(props); // 먼저 실행시킬 코드를 해당 construct 내에 작성한다
    this.state = {
      subject:{title:'WEB',sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'HTML is for desigin'},
        {id:3, title:'JavaScript:', desc:'HTML is for interactive'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> 
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}





export default App;
