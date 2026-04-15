import {Component} from 'react';
class MyBtn extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <button>{this.props.title}</button>
    }
}
export default MyBtn;