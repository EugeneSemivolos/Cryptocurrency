import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'antd/dist/reset.css';

ReactDom.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
