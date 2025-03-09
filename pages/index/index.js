Page({
  data: {
    categories: ['全部', '冷笑话', '热门笑话', '爱情笑话', '无厘头笑话', '生活笑话', '职场笑话'],
    currentCategory: '全部',
    jokes: [
      {
        id: 1,
        content: '小明：爸爸，我考了100分！爸爸：真的吗？在哪个科目？小明：数学50分，语文50分！',
        likes: 100,
        comments: 50,
        shares: 30,
        createdAt: '2024-03-20'
      },
      {
        id: 2,
        content: '老师：小明，你为什么迟到？小明：因为看到前面有个牌子写着"前方学校，慢行"。',
        likes: 88,
        comments: 45,
        shares: 20,
        createdAt: '2024-03-20'
      },
      {
        id: 3,
        content: '医生：你要多运动。病人：我每天都在打麻将啊！医生：那不是运动。病人：那你没见过我打麻将时有多激动！',
        likes: 120,
        comments: 60,
        shares: 40,
        createdAt: '2024-03-20'
      }
    ],
    loading: false
  },

  onLoad() {
    // 页面加载时数据已经在 data 中了
  },

  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
    // 这里可以根据分类加载不同的笑话
  },

  onLike(e) {
    const id = e.currentTarget.dataset.id;
    // 处理点赞逻辑
    console.log('点赞', id);
  },

  onComment(e) {
    const id = e.currentTarget.dataset.id;
    console.log('评论', id);
  },

  onShare(e) {
    const id = e.currentTarget.dataset.id;
    console.log('分享', id);
  },

  onFavorite(e) {
    const id = e.currentTarget.dataset.id;
    console.log('收藏', id);
  }
}); 