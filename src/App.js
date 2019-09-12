import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      info: '',
      lang: 'español'
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event) {
    const targetValue = event.target.value;
    const stateItem = event.target.name;
    this.setState(
      { [stateItem]: targetValue }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="inputs-container">
          <input name="name" onChange={this.handleChange} value={this.state.name}></input>
          <textarea name="info"onChange={this.handleChange} value={this.state.info}></textarea>
          <select name="lang" onChange={this.handleChange} value={this.state.lang}>
            <option value="español">español</option>
            <option value="inglés">inglés</option>
            <option value="portugués">portugués</option>
          </select>
        </div>
        <div className="card-container" >
          <h2 className="card-name">{this.state.name}</h2>
          <p className="card-description">{this.state.info}</p>
          <p className="card-language">{this.state.lang}</p>
        </div>
      </div>
    );
  }
}

export default App;
