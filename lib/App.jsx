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
  changeHandler = (event) => {
    let result = [];
    for (let i of Countries){
      if (i.name.toLocaleLowerCase().search(event.target.value.toLocaleLowerCase()) >= 0)
        result.push(i);
    }
    this.setState({ list: result });
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
      <div className="app">
        <input type="text" onChange={ this.changeHandler }/>
        <div className="list">
          {
            this.content
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
