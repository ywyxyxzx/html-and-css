import { Component } from "react"
class Control extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            data: []
        }
    }
    addVal() {
        if (this.state.name) {
            let arr = [...this.state.data];
            arr.push(this.state.name);
            this.setState((prevState, prevProps) => {
                return {
                    data: arr,
                    name: ''
                }
            })
        }

    }
    handleValChange(e){
        this.setState({ name: e.target.value })
    }
    render() {
        return <div>
            <label>name</label>
            <input type="text" value={this.state.name} onChange={(e) => this.handleValChange(e) }></input>
            <button onClick={() => this.addVal()}>add</button>
            <ul>
                {this.state.data.map((item, index) => {
                    return <li key={index}><span>{index}</span> - {item}</li>
                }).reverse()}
            </ul>
        </div>
    }
}
export default Control