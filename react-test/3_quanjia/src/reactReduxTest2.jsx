import React from 'react'
import {connect} from 'react-redux'
import store from './store.js'
const mapStateToProps = (state) => {
    return {
        count: state
    }
}
const asyncAdd = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT' })
        }, 2000)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        asyncAdd: () => dispatch(asyncAdd())
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ReactReduxTest2 extends React.Component {
    constructor(props) {
        super(props)

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