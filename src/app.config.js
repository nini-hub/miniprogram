export default {
  pages: [
    'pages/index/index',
    'pages/news/index',
    'pages/newsDetail/index',
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#333",
    selectedColor: "#f03d37",
    backgroundColor: "#fff",
    borderStyle: "black",
    position:'top',
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/news/index",
        text: "美食学堂",
      },
      {
        pagePath: "pages/about/index",
        text: "关于我们",
      },
    ]
  }
}
