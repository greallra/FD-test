import React from 'react';
import { render } from 'react-dom';
import AppRouter from './components/AppRouter';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/main.scss';

render(
<Provider store={store}>
    <AppRouter/>
</Provider>,   
document.getElementById('App'))

module.hot.accept();