import React from "react";
class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            pwd:'',
            hobbiyArr:[]    
        }
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        alert(`${this.state.name}/${this.state.pwd}/${this.state.hobbiyArr}`)
    }
    render(){
        return <div>
           <form action="" onSubmit={(e) => this.handleSubmit(e)}>
            <label>name</label>
            <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
            <label>pwd</label>
            <input type="password" value={this.state.pwd} onChange={(e) => this.setState({ pwd: e.target.value })}></input>
             <label>hobbiy</label>
             <select multiple value={this.state.hobbiyArr} onChange={(e) => this.setState({ hobbiyArr: e.target.value })}>
                <option value="1">篮球</option>
                <option value="2">足球</option>
                <option value="3">跑步</option>
             </select>
            <hr></hr>
            <input type="submit" value="submit"/>
           </form>
        </div>
    }
}
export default Form