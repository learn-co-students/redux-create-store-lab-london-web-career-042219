import candyReducer from "./reducers/candyReducer"; // DO I have to?
import countReducer from "./reducers/countReducer";

export default function createStore(reducer) {
  // add your code here
  let state;
  function dispatch(action) {
    state = reducer(state, action); //calls passed reducer, with action
    render();
  }
  function getState() {
    return state;
  }
  return {
    dispatch, //1b store returns 2 functions
    getState //one to update state, one to retrieve
  };
}

let candyStore = createStore(candyReducer);
let countStore = createStore(countReducer);
candyStore.dispatch({ type: "@@INIT" });
countStore.dispatch({ type: "@@INIT" });

function render() {
const container = document.getElementById("container");
}



