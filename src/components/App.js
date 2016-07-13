import React, { Component } from 'react';
 
class App extends Component {
  render() {
    return (
      <div>
        <h1>React Webpack Starter</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
 
export default App;