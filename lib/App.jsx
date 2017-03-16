import React from 'react';
import ReactDOM from 'react-dom';
import Countries from '../countries.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: Countries
    }
    this.content = new Array();
  }
  render(){
    this.content = [];
    for (let i=0; i < this.state.list.length; i++) {
      this.content.push(
        <div className="country" key={ i }>
          <span>
            {
              this.state.list[i].name
            }
          </span>
        </div>
      )
    }
    return (
      <div className="list">
        {
          this.content
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
