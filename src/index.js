// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = App.render(document.getElementById('root'))

let appState = {
  name: 'Stateless component'
}

render(appState)
registerServiceWorker()
