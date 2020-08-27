
const fetchStatusReducer = (state = {status: ""}, action) => {
    switch(action.type) {
        case 'SET_FETCH_STATUS':
        return {status: action.status}
        default:
          return state
    }
}
  
export default fetchStatusReducer;
