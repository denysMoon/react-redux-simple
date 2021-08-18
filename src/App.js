import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/action'

import { useEffect } from 'react';


function App() {
  const data = useSelector(state=>state.joke)

  const dispatch = useDispatch()

  const onClick = () =>{
    dispatch(fetchData())
  }

  useEffect(()=>{
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      <button onClick={onClick}>gg</button>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
