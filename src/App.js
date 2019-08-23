import React, { useState , useEffect } from 'react'
import  axios from 'axios';

import { 
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'

import Header from './components/Header' 
import Home from './components/Home'
import Generos from './components/Generos'
import NovoGenero from './components/NovoGenero'
import EditarGenero from './components/EditarGenero'

function App() {

  const [ data, setData ] = useState({})

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <Router>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/generos' exact component={Generos}/>
        <Route path='/generos/novo' exact component={NovoGenero}/>
        <Route path='/generos/:id' exact component={EditarGenero}/>
      </Router>      
    </div>
  );
}

export default App;
