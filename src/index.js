import React from 'react';
// import { createRoot } from "react-dom/client"; //old
import ReactDOM from 'react-dom'; //The new way to import createRoot:
import './index.css';
import App from './containers/App';
import 'tachyons';

// import registerServiceWorker from './registerServiceWorker';


// const root = createRoot(document.getElementById('root')); //old
// root.render(<App />);

ReactDOM.render(<App />, document.getElementById('root')); 
registerServiceWorker();



