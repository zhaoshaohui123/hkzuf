import React, { Component } from 'react'
// 导入antd-mobile Carousel轮播图
// WingBlank 左右两侧 留出 15px的margin
import { Carousel, WingBlank,Flex } from 'antd-mobile';
import axios from 'axios'
import './index.css'

// 先import 本地图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"

// 整租合租数组  导航菜单的数据  比较死的
const navs = [{
  id: 0,
  img: nav1,
  title: '整租',
  path: '/home/houselist'
}, {
  id: 1,
  img: nav2,
  title: '合租',
  path: '/home/houselist'
}, {
  id: 2,
  img: nav3,
  title: '地图找房',
  path: '/map'
}, {
  id: 3,
  img: nav4,
  title: '去出租',
  path: '/rent/add'
}]

export default class News extends Component {
  state = {
    data: [],// 轮播图数据
    imgHeight: 176,
    isplay:false // 是否自动轮播 false不自动 true自动
  }
  componentDidMount(){
    this.getSwiperdata()
  }
  
    async getSwiperdata(){
      let res = await axios.get("http://api-haoke-dev.itheima.net/home/swiper")
      if (res.data.status!==200) {
        console.log('失败了')
        return
      }
      this.setState({
        data:res.data.body
      },()=>{
        this.setState({
          isplay:true
        })
      })
    }

  renderSwiper(){
    return this.state.data.map(item => (
      <a
        key={item.id}
        href="http://www.itcast.cn"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={`http://api-haoke-dev.itheima.net${item.imgSrc}`}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }}
        />
      </a>
   ))
  }
  renderNavs(){
    return navs.map((item,index)=>{
      return  <Flex.Item 
              key={item.id}
              onClick={()=>{
                // 点击跳转到对应页面
                this.props.history.push(item.path)
              }} 
              >
              <img src={item.img} alt=""/>
              <p>{item.title}</p>
            </Flex.Item>
    })
  }

  render() {
    return (
      <div className="index">
          <Carousel
            autoplay={this.state.isplay}
            infinite
          >
            { this.renderSwiper() }
          </Carousel>

          <Flex className="navs">
            { 
              this.renderNavs()
            }
          </Flex>
      </div>
    )
  }
}
