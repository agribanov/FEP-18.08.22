import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';
import './index.css';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getList } from './toolkitStore/todosSlice';
// import { getList } from './store/actions/todos';
// import store from './store';
import store from './toolkitStore';

store.dispatch(getList());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
