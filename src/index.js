// 入口文件index.js
// 1 
import React from 'react';
import ReactDOM from 'react-dom';

// 2 创建元素-组件

// 导入全局初始化样式
import './index.css'
// 导入antd-mobile 的样式
import 'antd-mobile/dist/antd-mobile.css'; 
import './assets/fonts/iconfont.css'
// 正式项目 就把 App 单独写js文件了
import App from './App'
// 3 渲染到页面
ReactDOM.render(<App></App>, document.getElementById('root'));

