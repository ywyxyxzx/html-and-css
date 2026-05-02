
import './App.css'
import store from './storte.js'
function App() {


  return (
    <>
    {/* redux */}
      <div>
        {store.getState()}
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}> + </button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}> - </button>
      </div>
    </>
  )
}

export default App
