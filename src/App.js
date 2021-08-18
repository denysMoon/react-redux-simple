import './App.css';

import Display from './components/Display/Display'

import { useDispatch } from 'react-redux';
import { fetchData } from './redux/action'

import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()

  const onClick = () =>{
    dispatch(fetchData())
  }

  useEffect(()=>{
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Display />
        <button onClick={onClick}>
          More
        </button>
      </div>
    </div>
  );
}

export default App;
