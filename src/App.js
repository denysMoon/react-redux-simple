import './App.css';

import Display from './components/Display/Display'

import { useDispatch } from 'react-redux';
import { fetchData } from './redux/action'

import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Display />
      </div>
    </div>
  );
}

export default App;
