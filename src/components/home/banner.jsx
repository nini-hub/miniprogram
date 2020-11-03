import React, { Component } from 'react'
import { View, Swiper, SwiperItem ,Image} from '@tarojs/components'

import './home.scss'

export default class Banner extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay

        >
          <SwiperItem>
            <View className='demo-text-1' >
              <Image
                src="../../assets/banner1.jpg"
              />
            </View>

          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              <Image
                src="../../assets/banner2.jpg"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>
              <Image
                src="../../assets/banner3.jpg"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>
              <Image
                src="../../assets/banner4.jpg"
              />
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
