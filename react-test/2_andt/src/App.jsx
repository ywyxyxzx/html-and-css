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
import ContextSimple from './components/ContextSimple';
import ContextSimple2 from './components/ContextSimple2';
import AntdForm from './components/AntdForm';
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
      <hr></hr>
      <ContextSimple></ContextSimple>
      <ContextSimple2></ContextSimple2>
      <AntdForm></AntdForm>
    </> 
  )
}

export default App
