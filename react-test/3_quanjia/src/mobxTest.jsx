import React, {Component} from 'react'

import {observer} from 'mobx-react';  

@observer
class MobxTest extends Component {

  render() {
    return (
      <>
        <div>
          {this.props.appStore.num}
        </div>
        <button onClick={() => this.props.appStore.increment()}> + </button>
        <button onClick={() => this.props.appStore.decrement()}> - </button>
      </>
    )
  }
}
export default MobxTest