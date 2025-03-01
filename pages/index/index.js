Page({
  data: {
    categories: ['全部', '冷笑话', '热门笑话', '爱情笑话', '无厘头笑话', '生活笑话', '职场笑话'],
    currentCategory: '全部',
    jokes: [],
    loading: false
  },

  onLoad() {
    // 模拟数据
    this.setData({
      jokes: [{
        id: 1,
        category: 'cold',
        content: '这是一个测试笑话内容',
        likes: 100,
        comments: 50,
        shares: 30,
        createdAt: '2024-03-20'
      }]
    });
  },

  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
  },

  onLike(e) {
    const id = e.currentTarget.dataset.id;
    // 处理点赞
  },

  onShare(e) {
    const id = e.currentTarget.dataset.id;
    // 处理分享
  },

  onFavorite(e) {
    const id = e.currentTarget.dataset.id;
    // 处理收藏
  }
}); 