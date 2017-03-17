import React from 'react';
import ReactDOM from 'react-dom';
import Countries from '../countries.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      search: ""
    }
  }
  changeHandler = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({ search });
  }
  render(){
    const renderCountries = Countries.map((currCountry, idx) => {
      const { name, code } = JSON.parse(JSON.stringify(currCountry).toLowerCase());
      const { search } = this.state;

      if (name.includes(search) || code.includes(search)) {
        return <li key={idx}>{currCountry.name}</li>
      }
    });
    return (
      <div className="app">
        <input type="text" onChange={ this.changeHandler }/>
        <div className="list">
          {
            renderCountries
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
