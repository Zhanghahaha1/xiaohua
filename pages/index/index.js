Page({
  data: {
    categories: ['全部', '冷笑话', '热门笑话', '爱情笑话', '无厘头笑话', '生活笑话', '职场笑话'],
    currentCategory: '全部',
    jokes: [],
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
    
    wx.cloud.callFunction({
      name: 'getJokes',
      data: {
        category: this.data.currentCategory,
        page: this.data.page
      }
    }).then(res => {
      if (res.result.code === 0) {
        const newJokes = res.result.data
        this.setData({
          jokes: [...this.data.jokes, ...newJokes],
          page: this.data.page + 1,
          hasMore: newJokes.length === 10,
          loading: false
        })
      } else {
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        })
      }
    }).catch(err => {
      console.error(err)
      wx.showToast({
        title: '网络错误',
        icon: 'none'
      })
    }).finally(() => {
      this.setData({ loading: false })
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
    const id = e.currentTarget.dataset.id;
    const jokes = this.data.jokes.map(joke => {
      if (joke.id === id) {
        return {
          ...joke,
          likes: joke.likes + 1
        };
      }
      return joke;
    });
    
    this.setData({ jokes });
    
    wx.showToast({
      title: '点赞成功',
      icon: 'success'
    });
  },

  onShare(e) {
    const id = e.currentTarget.dataset.id;
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  }
});