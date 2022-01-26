import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; //元件
//若把components取名為index.js，那路徑就寫到Home就可以
// react會自己辨別index.js
import Home from './pages/Home'; 

// 利用ReactDOM的render將我們寫的元件渲染上去
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

