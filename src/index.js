import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import { robots } from './robots';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <CardList robots={robots}/>
  </div>
  , document.getElementById('root'));

serviceWorker.unregister();
