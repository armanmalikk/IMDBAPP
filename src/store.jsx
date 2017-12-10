'user strict';

import {applyMiddleware, createStore} from 'redux';
// import { createLogger } from 'redux-logger';
import reducer from "./Common/Reducer/index.jsx";

// const middleware = applyMiddleware(createLogger());

// export default createStore(reducer,middleware);
export default createStore(reducer);
