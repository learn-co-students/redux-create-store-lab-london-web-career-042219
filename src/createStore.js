export default function createStore(reducer) {
  let state 

  const dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  const getState = () => {
    return state
  }

  dispatch({ type: '@@INIT' })

  return {
      getState,
      dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}
