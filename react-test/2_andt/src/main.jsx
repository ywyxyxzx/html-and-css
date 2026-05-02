import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import store from './storte.js'
//  订阅
store.subscribe(() => {
  console.log(store.getState())
})
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
