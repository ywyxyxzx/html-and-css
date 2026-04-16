import React from "react"

class NotControl extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            val: ''
        }
        this.aRef = React.createRef()
    }
    handleValChange(e){
        console.log(this.aRef.current)
        this.setState({ val: this.aRef.current.value }) 
    }
    render(){
        return <div>
            <label>val</label>
            <input type="text"  onChange={(e) => this.handleValChange(e) } ref={this.aRef}></input>
            <p>{this.state.val}</p>
        </div>
    }
}

export default NotControl