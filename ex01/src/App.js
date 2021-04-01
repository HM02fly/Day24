import React, { Component } from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie = 'Year=2021';
    localStorage.setItem('Paragon', 'yes, but Arean first');
    sessionStorage.setItem('frontend', 'React');
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set My Storage</button>
      </div>
    );
  }
}

export default App;
