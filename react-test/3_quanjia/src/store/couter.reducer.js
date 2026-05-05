function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export const mapStateToProps = (state) => {
    return {
        count: state
    }
}
export const asyncAdd = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT' })
        }, 2000)
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        asyncAdd: () => dispatch(asyncAdd())
    }
}
export default counter;