import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtTabBar   ,AtCard} from 'taro-ui'
import './index.scss'


export default class news extends Component {

  state = {
    current: 1,
    data:[]
  }

  async componentWillMount () { 
    await Taro.request({
      url: 'https://www.fastmock.site/mock/602d2e41c5aa2423c03099413ee1e97b/food/news',
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => 
          this.setState({
            data:res.data
          })
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
    const {data}=this.state
    // const temp = data.forEach(element => (
    //   <AtCard
    //     note='小Tips'
    //     extra={element.title}
    //     title={element.title}
    //     thumb={element.img}
    //   >
    //     这也是内容区 可以随意定义功能
    //   </AtCard>
    //     ))
    // console.log(data[0] && data[1].description ,data[0] &&  typeof data[0].description);
    return (
      <View className='news'>
        {data.map(element => (
          <AtCard
            key={element.id}
            note={element.date}
            extra={element.id+1}
            title={element.title}
            thumb={element.img}
          >
            {element.description.slice(0,22)}...
          </AtCard>
            ))}
          <View className='temp'></View>
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
