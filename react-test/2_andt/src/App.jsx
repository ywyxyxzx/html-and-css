import React from 'react'
import Compound from './components/Compound'
import CommentList from './components/CommentList'
import Hoc2 from './components/Hoc'
import MovieA from './components/MovieA';
import MovieB from './components/MovieB';
import Auth1 from './components/Auth1';
import Auth2 from './components/Auth2';
import './App.css'
// import 'antd/dist/antd.css' // antd v3 CSS import - may cause issues
import ContextSimple from './components/ContextSimple';
import ContextSimple2 from './components/ContextSimple2';
import AntdForm from './components/AntdForm';
import MyForm from './components/MyForm';
import MyForm2 from './components/MyForm2';
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
      <hr></hr>
      <AntdForm></AntdForm>
      <hr></hr>
      <MyForm></MyForm>
         <hr></hr>
          <MyForm2></MyForm2>
    </> 
  )
}

export default App
