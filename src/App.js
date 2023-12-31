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
      mode: 'read',
      welcome:{title:'welcome',desc:'Hello, React'},
      subject:{title:'WEB',sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'HTML is for desigin'},
        {id:3, title:'JavaScript:', desc:'HTML is for interactive'}
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    // console.log("App render")
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>   */}
        <header>
            <h1><a href="/" onClick={function (e) {
              // console.log(e);
              // debugger;
              e.preventDefault();
              // this.state.mode = 'welcome'
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>
            {this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content 
        title={_title} desc={_desc}
        ></Content>
      </div>
    );
  }
}


export default App;
