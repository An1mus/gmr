import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
