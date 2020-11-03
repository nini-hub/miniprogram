import React, { Component } from 'react'
import { View,Image} from '@tarojs/components'
import {AtGrid ,AtDivider } from "taro-ui"
import './home.scss'


export default class Brand extends Component {


  render () {
    return (
      <View className='brand'>
        <AtDivider content='本店优势' />
          <AtGrid columnNum={2} data={
            [
              {
                image: '../../assets/icon-chair.png',
                value: '环境舒适'
              },
              {
                image: '../../assets/icon-chef.png',
                value: '服务周到'
              },
              {
                image: '../../assets/icon-tie.png',
                value: '资深大厨'
              },
              {
                image: '../../assets/icon-chair.png',
                value: '企业文化'
              },
            ]
          } />
        <AtDivider content='厨师风采' />
        <AtGrid data={
          [
            {
              image: '../../assets/cook-head-1.png',
              value: '蔡某某'
            },
            {
              image: '../../assets/cook-head-2.png',
              value: '胡某某'
            },
            {
              image: '../../assets/cook-head-3.png',
              value: '周某某'
            },
          ]
        } />
      </View>
    )
  }
}
