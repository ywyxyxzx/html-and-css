import {Component } from 'react';
import './Comment.css'
class Comment extends Component {
    constructor(props){
        super(props)
        this.name = props.name
        
    }
    handleClick=()=>{
        console.log(this)
        this.props.add('子组件的值')
  
    }
    render(){
        return <div className='box'>
            <p  onClick={this.handleClick}>{this.props.name}</p>
             <p >{this.props.age}</p>
        </div>
    }
}
export default Comment;