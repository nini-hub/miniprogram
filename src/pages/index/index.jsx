import React, { Component } from 'react'
import { View} from '@tarojs/components'
import Banner from '../../components/home/banner'
import Brand from '../../components/home/brands'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* 轮播图 */}
        <Banner />
        
        {/* 招牌厨师长 */}
        <View><Brand /></View>
      </View>
    )
  }
}
