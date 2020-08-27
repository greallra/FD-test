import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk'
import menuReducer from '../reducers/menuReducer';
import basketReducer from '../reducers/basketReducer';
import fetchStatusReducer from '../reducers/fetchStatusReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combined = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    fetchStatus: fetchStatusReducer
})

const store = createStore(combined, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store