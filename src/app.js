import React from 'react';
import ReactDOM from 'react-dom';

//STYLES
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//COMPONENTS
import TimerApp from './components/TimerApp';

ReactDOM.render(<TimerApp />, document.getElementById('app'));
