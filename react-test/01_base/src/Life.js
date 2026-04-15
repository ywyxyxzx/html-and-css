import {Component} from 'react';
class Life extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log('1.子组件构造函数')
    }
    componentWillMount(){
        console.log('2.子组件挂载前')
    }
    componentDidMount(){
        console.log('4.子组件挂载后')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('5.子组件shouldComponentUpdate')
        return true
    }
    componentWillReceiveProps(nextProps, nextState){
        console.log('6.子组件componentWillReceiveProps')
    }
    componentDidUpdate(){
        console.log('7.子组件componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('8.子组件componentWillUnmount')
    }   
    render(){
        console.log('3.子组件render')
        return <div>
            <h1 onClick={()=>this.handleClick()}>子Life组件{this.state.count}</h1>
        </div>
    }
    handleClick(){
        console.log(this)
        this.setState((prevState, prevProps)=>{
            return {
                count: prevState.count + 1
            }
        },()=>{
            console.log(this.state.count)
        })
        this.props.lifeClick('hello')   
    }
}
   
export default Life;