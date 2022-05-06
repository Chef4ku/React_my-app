import React from 'react';
import './App.css';


// const HelloWorld = (props) => <div id="hello">Hello World {props.text}</div>;

class HelloWorld extends React.Component {
  
  state = {
    show: false,
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <p>Hello World {this.props.text}</p>

          <button onClick={this.toggleShow}>Hide</button>
        </div>
      );
    } else {
      return (
        <div id="hello">
          <button onClick={this.toggleShow}>Show</button>
        </div>
      );  
    }
  }
}

function App() {
  return (
    <div id="app"><HelloWorld text="X"/></div>
  );
}

export default App;