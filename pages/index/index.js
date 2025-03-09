Page({
  data: {
    categories: ['全部', '冷笑话', '热门笑话', '爱情笑话', '无厘头笑话', '生活笑话', '职场笑话'],
    currentCategory: '全部',
    jokes: [
      {
        id: 1,
        content: '小明：爸爸，我考了100分！爸爸：真的吗？在哪个科目？小明：数学50分，语文50分！',
        likes: 100,
        shares: 30
      }
    ],
    loading: true,
    page: 1,
    hasMore: true
  },

  onLoad() {
    this.loadJokes()
  },

  loadJokes() {
    if (!this.data.hasMore || this.data.loading) return
    
    this.setData({ loading: true })
    
    wx.request({
      url: 'https://api.apiopen.top/getJoke',
      data: {
        page: this.data.page,
        count: 10,
        type: 'text'
      },
      success: (res) => {
        if (res.data.code === 200) {
          const newJokes = res.data.result.map(item => ({
            id: item.sid,
            content: item.text,
            likes: item.laugh || 0,
            shares: item.forward || 0,
            createdAt: item.time
          }))

          this.setData({
            jokes: [...this.data.jokes, ...newJokes],
            page: this.data.page + 1,
            hasMore: newJokes.length === 10
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        })
      },
      complete: () => {
        this.setData({ loading: false })
      }
    })
  },

  onPullDownRefresh() {
    this.setData({
      jokes: [],
      page: 1,
      hasMore: true
    }, () => {
      this.loadJokes()
      wx.stopPullDownRefresh()
    })
  },

  onReachBottom() {
    if (this.data.hasMore) {
      this.loadJokes()
    }
  },

  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category
    this.setData({
      currentCategory: category,
      jokes: [],
      page: 1,
      hasMore: true
    }, () => {
      this.loadJokes()
    })
  },

  onLike(e) {
    const id = e.currentTarget.dataset.id
    // 处理点赞逻辑
    wx.showToast({
      title: '点赞成功',
      icon: 'success'
    })
  },

  onShare(e) {
    const id = e.currentTarget.dataset.id
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
}) 