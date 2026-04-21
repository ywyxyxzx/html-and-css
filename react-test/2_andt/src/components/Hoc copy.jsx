import React, {Component} from 'react';
const highOrderCom = (Comp)=>{
    // const attr = {type: '告诫1232'}

    // const NewComp = (props) =>{
    //     return (
    //         <Comp {...props} {...attr}/>
    //     )
    // }
    // return NewComp
    return class extends Component{
        constructor(props){
            super(props)
        }
        componentDidMount(){
            console.log('发请求')
        }
        render(){
            return (
                <Comp  name ="react222" content="高阶组件的使用"/>
            )
        }
    }
}
const withLog = (Comp)=>{
  console.log(Comp.name + "渲染了1")
  return (props)=>{
    return <Comp {...props}></Comp>
  }
}


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

export default highOrderCom(withLog(Hoc));