import {Component } from 'react';
import './Comment.css'
class Comment extends Component {
    constructor(props){
        super(props)
        this.name = props.name
        
    }
    handleClick=(text)=>{
        console.log(this)
        this.props.add(text)
  
    }
    render(){
        return <div className='box' onClick={this.props.onClick}>
            <p  onClick={()=>this.handleClick(this.props.name)}>{this.props.name}</p>
             <p onClick={()=>this.handleClick(this.props.age)}>{this.props.age}</p>
        </div>
    }
}
export default Comment;