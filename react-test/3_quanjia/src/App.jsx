import React from 'react'
import './App.css'
import ReduxTest1 from './reduxTest1'
import store from './store/index'
import { Provider } from 'react-redux'
import ReactReduxTest2 from './reactReduxTest2'
import appStore from 'store/mobx.js';
import {BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import  MobxTest from './mobxTest'
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <>
    <Provider store={store}>
      <ReduxTest1 />
      <hr></hr>
      <ReactReduxTest2 />
    </Provider>
    <hr></hr>
    <MobxTest appStore={appStore} />

    <hr></hr>
    <HashRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
          <li>
          <Link to="/course">Course</Link>
        </li>
          <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      <Route path="/" component={MobxTest} />
      <Route path="/course" component={MobxTest} />
      <Route path="/user" component={MobxTest} />
    </HashRouter>
    </>
    )
  }
}
export default App
