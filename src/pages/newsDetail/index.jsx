import React,{Component} from 'react'
import Taro ,{getCurrentInstance } from '@tarojs/taro'
import { View,Image} from '@tarojs/components'
import {AtActivityIndicator,AtTabBar} from 'taro-ui'
import './index.scss'


export default class news extends Component {

  state = {
    current: 1,
    data:{},
  }

  async componentWillMount () { 
    console.log(getCurrentInstance().router.params);
    const id = getCurrentInstance().router.params.id
    await Taro.request({
      url: `https://www.fastmock.site/mock/602d2e41c5aa2423c03099413ee1e97b/food/newsdetail?id=${id}`,
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        this.setState({
          data:res.data.data
        })
      }
      )
  }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const {data:{id}}=this.state
    return (
      <View className='at-article'>
        <View className='at-article__h1'>
          {id && id.title}
        </View>
        <View className='at-article__info'>
          {id && id.date}&nbsp;&nbsp;&nbsp;
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            {/* <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View> */}
            <View className='at-article__p'>
              {id && id.description}
            </View>
            {/* <View ew className='at-article__p'>
              这是文本段落。这是文本段落。
            </View> */}
            <Image 
              className='at-article__img' 
              src={id && id.img} 
              mode='widthFix' />
          </View>
        </View>
        <AtActivityIndicator mode='center' isOpened={!id}><View className='temp'></View></AtActivityIndicator>
        <AtTabBar
            fixed
            tabList={[
              { title: '首页', iconType: 'home'},
              { title: '美食学堂', iconType: 'sketch' },
              { title: '联系我们', iconType: 'phone' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
      </View>
    )
  }
}
