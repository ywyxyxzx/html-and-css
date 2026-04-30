import React from 'react'

class MyForm extends React.Component {
    handleSubmit(){
        // 校验 字段
        console.log("validate fields")
    }
  render() {
    return (
      <div>
        <input type="text" />
        <input type="password" />
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}   
export  default MyForm