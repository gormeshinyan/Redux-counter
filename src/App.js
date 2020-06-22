import React from 'react'; 
import './App.css';
import { useSelector , useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const counter=useSelector((state)=>state.counter);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter : {counter}</h1>
        <button onClick={(()=>dispatch({type:'INCREMENT'}))} >INCREMENT</button>
        <button onClick={(()=>dispatch({type:'RESET'}))} >RESET</button>
        <button onClick={(()=>dispatch({type:'DECREMENT'}))} >DECREMENT</button>
      </header>
    </div>
  );
}


export default App;
