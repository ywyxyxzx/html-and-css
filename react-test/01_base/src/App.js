import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyBtn from './MyBtn';
import Comment from './Comment';
import Life from './Life';
import Control from './Control';
import NotControl from './NotControl'
import Form from './Form'


const arr = [1, 2, 3];
class App extends React.Component {
   constructor(props){
        console.log('1.父组件构造函数')
        super(props)
        this.user = {
            name: '张三',
            age: 18
        }
        this.state = {
          count: 0
        }
    }
    componentWillMount(){
        console.log('2.父组件挂载前')
    }
    componentDidMount(){
        console.log('4.父组件挂载后')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('5.父组件shouldComponentUpdate')
        return true
    }
    componentWillReceiveProps(nextProps, nextState){
        console.log('6.父组件componentWillReceiveProps')
    }
    componentDidUpdate(){
        console.log('7.父组件componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('8.父组件componentWillUnmount') 
    }   
    add(val){
      alert(val)
    }
    addCount(e){
      console.log(1,e)
      this.setState((prevState, prevProps)=>{
        console.log(2,prevState, prevProps)
        return {
          count: prevState.count + 1
        }
      },()=>{
        console.log(3,this.state.count)
      })
    } 
    lifeClick=(value)=>{
      console.log(value)
    }

    commentClick = (e)=>{
      alert("1111111111111111111111111111111111")
    }
  render() {
    console.log('3.父组件挂render')
    return <div>
      <img src={logo} className="App-logo" alt="logo" style={{width:100,height:100}}/>
      <ul>

        {arr.map((item, i) => {
          return <li>{i}-{item}</li>

        })};
      </ul>
      <MyBtn title="submit"></MyBtn> 
      <div className="commentBox">
        111
        <Comment {...this.user} add={this.add} onClick={this.commentClick}></Comment>
      </div>z
     <div>
      <p>{this.state.count}</p>
      <button onClick={(e)=>this.addCount(e)}>+1</button>
     </div>
     <Life lifeClick={this.lifeClick} title={this.state.lifeTitle}></Life>
     <button onClick={()=>this.setState({lifeTitle:'hello'})}>改变子组件标题</button>

     <div>
        <p>control</p>
       <Control/>
       <p>NotControl</p>
        <NotControl/>
     </div>

     <div>
      <Form/>
     </div>
    </div>

  }
}

export default App;
