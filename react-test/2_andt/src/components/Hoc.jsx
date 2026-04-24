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
//高阶组件：本质上时一个函数，这个函数接收一个组件或者多个组件，返回一个新组件

// 高阶函数
// 定义：接收的参数是函数或者返回值是函数
// 常见的：数组遍历的相关方法、定时器、Promise 、高阶组件
// 作用： 实现一个更加强大的 动态功能
// [1,3,5]  [3,5,7]

// y = kx + b;
/* const highOrderCom = (Comp)=>{
  // 返回一个新组件
  const NewComponent = (props)=>{
    // 属性代理
    const attr = {type:'高阶组件',price:168}
    return <Comp {...props} {...attr}></Comp>
  }
  return NewComponent

} */
// 打印日志的高阶组件
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