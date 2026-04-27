import React, { Component } from "react"
import {Button} from "antd";
// 第一种渲染的方式 首先定制当前创建的上下文对象 为当前实例的静态属性
// 在渲染的方法中使用this.context获取共享的数据
// static contextType = ThemeContext;

// this.context

const ThemeContext = React.createContext();
class ThemeBtn extends Component {
   // static contextType = ThemeContext;
    constructor(props) {
        super(props);
       console.log(123123, this)
    }
    
    render() {
        return (
          //  <Button type={this.context.type}>{this.context.name}</Button>
          <ThemeContext.Consumer>
            {(value) => <Button type={value.type}>{value.name}</Button>}
          </ThemeContext.Consumer>
        )
    }
}

function Toolbar(props) {
    return (
        <ThemeBtn></ThemeBtn>
    )
}

export default class ContextSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
           store:{ type: 'primary',
            name: '按钮2'}
        }
    }
    render() {


        return (
            <ThemeContext.Provider value={this.state.store}>
                <div>
                    <Toolbar></Toolbar>
                </div>
            </ThemeContext.Provider>
        )
    }
}
