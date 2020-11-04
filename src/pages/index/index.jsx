import React, { Component } from 'react'
import { View} from '@tarojs/components'
import Taro,{ redirectTo } from '@tarojs/taro'
import { AtTabBar   } from 'taro-ui'
import Banner from '../../components/home/banner'
import Brand from '../../components/home/brands'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  state = {
    current: 0
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
    redirectTo({
      url:  '../news/index'
    })
  }

  render () {
    return (
      <View className='index'>
        {/* 轮播图 */}
        <Banner />
        
        {/* 招牌厨师长 */}
        <View><Brand /></View>
        <View>
          <AtTabBar
            fixed
            tabList={[
              { title: '首页', iconType: 'home'},
              { title: '美食学堂', iconType: 'sketch' ,text: 'new' },
              { title: '联系我们', iconType: 'phone' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
        <View className='temp'></View>
      </View>
    )
  }
}
