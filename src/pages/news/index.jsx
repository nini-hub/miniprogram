import React,{Component} from 'react'
import Taro  from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtTabBar   ,AtCard,AtActivityIndicator, AtDivider} from 'taro-ui'
import './index.scss'


export default class news extends Component {

  state = {
    current: 1,
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

  handleClick (value) {
    this.setState({
      current: value
    })
  }

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
          <AtActivityIndicator mode='center' isOpened={!data.list}><View className='temp'></View></AtActivityIndicator>
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
