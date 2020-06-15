// App.js 根组件
//1 导入react
import React from 'react'
//2 创建组件并导出 
// 在App根组件 配置一个基本路由
/*  1 下载react-router-dom包  cnpm i react-router-dom -S
  2 导入3个组件 import {BrowserRouter,Route,Link} from 'react-router-dom'
  3 BrowserRouter必须在App根组件包裹一次 
  4 Route 匹配地址  挖坑 显示对应组件
*/

import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
// 导入组件
// 一个文件夹 写一个组件 结构清晰 ：index.js可以省略的 默认会去找


import Home from './pages/Home'
import Citylist from './pages/Citylist'
class App extends React.Component{
  render(){
    return <Router>
          <div>
                {/* <h1>我是app根组件</h1> */}
                

                {/* /home 匹配Home 
                 <Route path="/地址" component={显示的组件}></Route>
                */}
                <Route 
                exact 
                path="/" 
                render={(props)=>{
                      // 默认/ 就 Redirect 跳转到首页 
                      return <Redirect to="/home/index"></Redirect>
                }}></Route>
                <Route path="/home" component={Home}></Route>
                <Route exact path="/citylist" component={Citylist}></Route>
          </div>
    </Router>
    
  }
}

export default App;
