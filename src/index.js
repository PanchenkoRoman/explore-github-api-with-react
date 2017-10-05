import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import style from './globalStyle.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App className = {style.main} />
    </Provider>, document.querySelector('#root'));
registerServiceWorker();