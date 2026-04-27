import React, { Component } from "react"
import {Button} from "antd";
import { withProvider,withConsumer } from '../Hoc/index'
// 第一种渲染的方式 首先定制当前创建的上下文对象 为当前实例的静态属性
// 在渲染的方法中使用this.context获取共享的数据
// static contextType = ThemeContext;

// this.context
@withConsumer
class ThemeBtn extends Component{

    render() {
        return (
            <Button type={this.props.value.type}>{this.props.value.name}</Button>
        )
    }
}

function Toolbar(props) {
    return (
        <ThemeBtn></ThemeBtn>
    )
}
@withProvider
export default class ContextSimple2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (
            <Toolbar/>
        )
    }
}
