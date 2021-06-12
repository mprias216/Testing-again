import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Switch, 
	Route
} from 'react-router-dom'; //npm install react-router-dom --save
import './index.css';
import App from './App';
import darkKnight from './darkKnight';
import store from './store';
import { Provider } from 'react-redux';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
  	<Router>
  		<Switch>
  			<Route exact path = "/">
  			<App />
        </Route>
        <Route exact path = "/darkKnight" component={darkKnight} />
        <Route>
  				<darkKnight />
  			</Route>
  			</Switch>
  	</Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
