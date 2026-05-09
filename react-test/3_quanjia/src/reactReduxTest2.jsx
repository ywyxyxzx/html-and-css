import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps}from 'store/couter.reducer'
import store from 'store/index'

@connect(mapStateToProps, mapDispatchToProps)
class ReactReduxTest2 extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count
            })
          
            console.log(12312312312312312,store.getState())
        })
    }
    componentWillUnmount() {
        store.unsubscribe()
    }
    render() {
        return (<>
            {/* redux */}
            <div>
                {this.props.count}
                <button onClick={() => this.props.increment()}> + </button>
                <button onClick={() => this.props.decrement()}> - </button>
                <button onClick={() => this.props.asyncAdd()}> async + </button>
            </div>
        </>)
    }
}
export default ReactReduxTest2