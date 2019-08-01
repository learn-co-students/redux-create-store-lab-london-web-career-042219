function createStore(reducer) {  //1. createStore
  let state;                 //code common to any JS app wrapped here!

  function dispatch(action) {
    state = reducer(state, action);//calls passed reducer, with action
    render();
  }
  
  function getState() {
    return state;
  }

  return {
    dispatch,                  //1b store returns 2 functions
    getState                   //one to update state, one to retrieve
  };
};


function changeCount(state = { count: 0 }, action) { //2. REDUCER
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}


function render() {                              //3. RENDER to page
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument // 4. SET STORE to use REDUCER
store.dispatch({ type: '@@INIT' });   //5. ‘Default’ state is set
let button = document.getElementById('button');

button.addEventListener('click', function () {
  store.dispatch({ type: 'INCREASE_COUNT' }); //6.k239
  Listener calls Reducer
});
