import React, {Component} from 'react';

class Subject extends Component {
    render() {
      return (
          <header>
              <h1><a href="/">{this.props.title}</a></h1>
              {this.props.sub}
          </header>
      );
    // var data = this.props.data;
    // return (
    //     <header>
    //         <h1>{data.title}</h1>
    //     </header>
    // )
    }
}

export default Subject;