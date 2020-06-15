import React ,{ Component } from 'react'
import {Route} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import './home.css'
import Index from '../Index'
import Houselist from '../Houselist'
import News from '../News'
import Profile from '../Profile'

const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/houselist'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }]
// 1 React.Component
// 2 { Component } 从React里面 直接解构拿出Component
export default class Home extends Component {
  state = {
      selectedTab: 'redTab',
      hidden: false,
      // fullScreen: false,
    };
  
  renderTabbarItem(){
     return tabItems.map((item,index)=>{
        return <TabBar.Item
        title={item.title} // 文字
        key={index}
        icon={ //默认图标
          <i className={`iconfont ${item.icon}`}></i>
        }
        selectedIcon={ //选中图标
          <i className={`iconfont ${item.icon}`}></i>
        }
        // selected  true选中   false未选中 
        selected={this.state.selectedTab === item.path }
        onPress={() => { // onPress点击 类似onClick
          // 切换单词 就切换选中状态-换有意义的单词
          this.setState({
            selectedTab: item.path,
          });
          // 点击 底部标签  切换 跳转到 对应的页面
          this.props.history.push(item.path)
        }}
        data-seed="logId"
      >
      </TabBar.Item>
     })
  }  
  

  render() {
    return (
    <div className="home">
            {/* 挖坑 显示四个 子路由 首页 找房 资讯 我的 */}
            <Route exact path="/home/index" component={Index}></Route>
            <Route exact path="/home/houselist" component={Houselist}></Route>
            <Route exact path="/home/news" component={News}></Route>
            <Route exact path="/home/profile" component={Profile}></Route>



        <TabBar
          unselectedTintColor="#bbb"
          tintColor="#f20"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent={true}
        >
          {
            this.renderTabbarItem()
          }
            
        </TabBar>
    </div>
    )
  }
}
