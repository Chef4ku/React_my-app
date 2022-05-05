import './App.css';


const HelloWorld = (p) => <div id="hello">Hello World {p.text}</div>;


function App() {
  return (
    <div id="app"><HelloWorld text="X"/></div>
  );
}

export default App;