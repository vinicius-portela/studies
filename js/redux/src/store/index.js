import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'React Native',
    'ReactJS'
  ],
}

//Function that treat a state
//Before state, action
function courses(state = INITIAL_STATE, action) {
  //Depending on type of action, do something
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

//Create a store from reducer
const store = createStore(courses);

export default store;