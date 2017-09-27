import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import style from './globalStyle.scss';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

{/*<Provider store={createStoreWithMiddleware(reducers)}>*/}
    {/*<App />*/}
{/*</Provider>*/}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.querySelector('#root'));
registerServiceWorker();