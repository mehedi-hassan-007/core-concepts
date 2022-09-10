import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const mans = [{name:' robiul', age:55},{name:' jobitul', age:55},{name:' maental boy', age:55},{name:' kobiton', age:55}];
  return (

    <div className="App">
      <MoviesCounter></MoviesCounter>
      {
      mans.map(nk => <Person name={nk.name} age={nk.age}></Person>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function MoviesCounter () {
  let [count, setCount] = useState(5);
  const onClickHandle=() => setCount(count +1);
  return (<div>
  <button onClick={onClickHandle}>add movies</button>
    <h4>number of movies: {count}</h4>
    <MoviesDisplay name={count+6}></MoviesDisplay>
    <MoviesDisplay></MoviesDisplay>
    <MoviesDisplay></MoviesDisplay>
  </div>)
}
function MoviesDisplay (props) {
  return (<div>
    <h4>movies i acted:{props.name}</h4>
    </div>)
}

function Person (props) {
  const personStyle = {
    border: '10px solid red',
    borderRadius: '3 px',
    margin: '10px',
    backgroundColor: 'purple',
    width: '900px',
    height: '200px',
    textalign: 'center',
    borderRadius: '50px',
    color: 'white'
  }
  return (<div style={personStyle}>
    <h3>ami mohammad:{props.name}</h3>
    <h5>I have done 5 moves in {props.age} years</h5>
    </div>)
}
export default App;
