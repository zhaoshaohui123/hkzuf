import React ,{ Component } from 'react'
// 1 React.Component
// 2 { Component } 从React里面 直接解构拿出Component
// 导入Route
import { Route } from 'react-router-dom'
// 导入组件 在哪用在哪导
import { TabBar } from 'antd-mobile';
// 导入样式
import './home.css'
// 导入四个组件
import Index from '../Index'
import Houselist from '../Houselist'
import News from '../News'
import Profile from '../Profile'
export default class Home extends Component {
  // 复制数据
  state = {
    selectedTab: "/home/index",//选中的单词
    hidden: false //是否隐藏 true  false
  }

  render() {
    return (
      // 建议大家每个  组件 都取一个类名 页面多了 容易乱
      <div className="home">
            {/* 我是home组件 */}
            {/* 挖坑 显示四个 子路由 首页 找房 资讯 我的 */}
            <Route exact path="/home/index" component={Index}></Route>
            <Route exact path="/home/houselist" component={Houselist}></Route>
            <Route exact path="/home/news" component={News}></Route>
            <Route exact path="/home/profile" component={Profile}></Route>
            

            {/* 先写底部tabbar 固定定位到底部 */} 
            <TabBar
                unselectedTintColor="#bbb"  //未选中的字体颜色 
                tintColor="#f20"  // 选中的字体颜色
                barTintColor="white" //整个tabbar 背景色
                hidden={this.state.hidden}  //hidden是否隐藏tabbar   false不隐藏 true隐藏
                noRenderContent={true}  // 不渲染div内容 false渲染  true不渲染
              >
                <TabBar.Item
                  title="首页" // 文字
                  key="Life"
                  icon={ //默认图标
                    <i className="iconfont icon-ind"></i>
                  }
                  selectedIcon={ //选中图标
                    <i className="iconfont icon-ind"></i>
                  }
                  // selected  true选中   false未选中 
                  selected={this.state.selectedTab === "/home/index"}
                  onPress={() => { // onPress点击 类似onClick
                    // 切换单词 就切换选中状态-换有意义的单词
                    this.setState({
                      selectedTab: "/home/index",
                    });
                    // 点击 底部标签  切换 跳转到 对应的页面
                    this.props.history.push("/home/index")
                  }}
                  data-seed="logId"
                >
                 
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <i className="iconfont icon-findHouse"></i>
                  }
                  selectedIcon={
                    <i className="iconfont icon-findHouse"></i>
                  }
                  title="找房"
                  key="Koubei"
                  selected={this.state.selectedTab ==="/home/houselist"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "/home/houselist",
                    });
                    // 点击 底部标签  切换 跳转到 对应的页面
                    // console.log('点击了啊')
                    this.props.history.push("/home/houselist")
                  }}
                  data-seed="logId1"
                >
                 
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <i className="iconfont icon-infom"></i>
                  }
                  selectedIcon={
                    <i className="iconfont icon-infom"></i>
                  }
                  title="资讯"
                  key="Friend"
                  selected={this.state.selectedTab === "/home/news"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "/home/news",
                    });
                    // 点击 底部标签  切换 跳转到 对应的页面
                    // console.log('点击了啊')
                    this.props.history.push("/home/news")
                  }}
                >
                  
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <i className="iconfont icon-my"></i>
                  }
                  selectedIcon={
                    <i className="iconfont icon-my"></i>
                  }
                  title="我的"
                  key="my"
                  selected={this.state.selectedTab === "/home/profile"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "/home/profile",
                    });
                     // 点击 底部标签  切换 跳转到 对应的页面
                    // console.log('点击了啊')
                    this.props.history.push("/home/profile")
                  }}
                >
                 
                </TabBar.Item>
            </TabBar>
      


      </div>
    )
  }
}
