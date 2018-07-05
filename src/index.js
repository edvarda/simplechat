import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider as ReactReduxProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { injectGlobal } from 'styled-components';
import { Provider as RebassProvider } from 'rebass';
import bg from './background.jpg';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));



injectGlobal`
  * { box-sizing: border-box; }
  body { 
  	margin: 0;
  	background-image: url(${bg});
  }
`

ReactDOM.render(
	<RebassProvider theme={{colors: {
		bubbles: '#E7FFF4',
		darkbubbles: '#A1CEB0',
		licorice: '#171510',
		englishgreen: '#1D4F36',
		darkspring: '#1A704C',
		blue: '#E7FFF4',

	}}}>
		<ReactReduxProvider store={store}>
			<App />
		</ReactReduxProvider>
	</RebassProvider>,
	document.getElementById('root')

);
registerServiceWorker();
