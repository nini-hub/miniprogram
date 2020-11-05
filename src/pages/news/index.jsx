import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtCard,AtActivityIndicator} from 'taro-ui'
import './index.scss'


export default class news extends Component {

  state = {
    data:{}
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
            data:res.data.data
          })
      )
  }

  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  gotoDetail =(id)=>{
    console.log(id);
    Taro.navigateTo({
      url:  `../newsDetail/index?id=${id}`
    })
  }
  render () {
    const {data}=this.state
    return (
      <View className='news'>
        {data.list && data.list.map(element => (
          <View key={element.id} onClick={()=>this.gotoDetail(element.id)}>
            <AtCard
              note={element.datatime}
              extra={element.name}
              title={element.title}
              thumb={element.img}
              className='card'
            >
              {element.description.trim().slice(0,22)}...
            </AtCard>
          </View>
            ))}
          <AtActivityIndicator mode='center' isOpened={!data.list}></AtActivityIndicator>
      </View>
    )
  }
}
