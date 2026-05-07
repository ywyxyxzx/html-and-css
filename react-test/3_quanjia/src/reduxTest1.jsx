import React from 'react'
import store from './store/index'
 class ReduxTest1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState().counter
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                count: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }


    render() {
        return (<>
            {/* redux */}
            <div>
                {this.state.count}
                <button onClick={() => store.dispatch({ type: 'INCREMENT' })}> + </button>
                <button onClick={() => store.dispatch({ type: 'DECREMENT' })}> - </button>
            </div>
        </>)
    }
}
export default ReduxTest1