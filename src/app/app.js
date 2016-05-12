import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import Main from './Main'; // Our custom react component

import Impulse from './components/projects/Impulse';
import StillAlive from './components/projects/StillAlive';
import Entangled from './components/projects/Entangled';
import Fliiip from './components/projects/Fliiip';
import ScreenPop from './components/projects/ScreenPop';
import Locket from './components/projects/Locket';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Main}/>
    <Route path="/impulse" component={Impulse}/>
    <Route path="/still-alive" component={StillAlive}/>
    <Route path="/entangled" component={Entangled}/>
    <Route path="/fliiip" component={Fliiip}/>
    <Route path="/screenpop" component={ScreenPop}/>
    <Route path="/locket" component={Locket}/>
  </Router>
  , document.getElementById('app'));
