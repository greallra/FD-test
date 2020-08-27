// import data from '../fixtures/menu';

const menuReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_MENU':
        return action.data
        default:
          return state
    }
}
  
export default menuReducer;
