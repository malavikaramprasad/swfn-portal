import React from 'react';
import Login from './Login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducer from '../redux';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ChangePassword from './ChangePassword';


window.axios = axios;

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* <Header/> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/password" component={ChangePassword} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
