import React from 'react'
import './App.css'
import ReduxTest1 from './reduxTest1'
import store from './store/index'
import { Provider } from 'react-redux'
import ReactReduxTest2 from './reactReduxTest2'
import appStore from 'store/mobx.js';

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
    </>
    )
  }
}
export default App
