import { useState } from 'react'
import Compound from './components/Compound'
import CommentList from './components/CommentList'
import Hoc2 from './components/Hoc'
import MovieA from './components/MovieA';
import MovieB from './components/MovieB';
import Auth1 from './components/Auth1';
import Auth2 from './components/Auth2';
import './App.css'
import 'antd/dist/antd.css'

function App() {
  

  return (
    <>
      <Compound />
      <CommentList />
      <Hoc2/>
      <MovieA></MovieA>
      <MovieB></MovieB>
      <Auth1/>
      <Auth2/>
    </> 
  )
}

export default App
