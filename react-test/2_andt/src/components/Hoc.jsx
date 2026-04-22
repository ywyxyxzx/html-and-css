import React, { Component } from 'react';
const highOrderCom = (Comp) => {
  // const attr = {type: '告诫1232'}

  // const NewComp = (props) =>{
  //     return (
  //         <Comp {...props} {...attr}/>
  //     )
  // }
  // return NewComp
  return class extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      console.log('发起网络请求')
    }
    render() {
      return (
        <Comp name="React框架1111123" content="高阶组件的使用1111" />
      )
    }
  }
}
const withLog = (Comp) => {
  console.log(Comp.name + "已渲染")
  return (props) => {
    return <Comp {...props}></Comp>
  }
}
@highOrderCom
@withLog
class Hoc extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <h4>{this.props.content}</h4>
      </div>
    )
  }
}

// // 使用函数调用替代装饰器语法
// const HocWithLog = withLog(Hoc);
// const HocWithHighOrder = highOrderCom(HocWithLog);

export default  Hoc;