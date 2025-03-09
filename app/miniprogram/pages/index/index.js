Page({
  data: {
    categories: ['全部', '冷笑话', '热门笑话', '爱情笑话', '无厘头笑话', '生活笑话', '职场笑话'],
    currentCategory: '全部',
    jokes: [
      {
        id: 1,
        content: '面试官：说说你的优点？应聘者：我特别善于发现他人的优点！面试官：那你说说我有什么优点？应聘者：您真会问问题！',
        category: '职场笑话',
        likes: 88,
        shares: 30
      },
      {
        id: 2,
        content: '老师：小明，如果我给你一个苹果，你弟弟要分一半，还剩多少？小明：一个完整的苹果。老师：为什么？小明：因为我不会告诉他。',
        category: '冷笑话',
        likes: 120,
        shares: 45
      }
    ],
    loading: false,
    page: 1,
    hasMore: true
  },

  onLoad() {
    console.log('页面加载')
    this.loadJokes()
  },

  loadJokes() {
    console.log('开始加载笑话，当前分类:', this.data.currentCategory)
    if (!this.data.hasMore || this.data.loading) {
      console.log('停止加载：hasMore=', this.data.hasMore, 'loading=', this.data.loading)
      return
    }
    
    this.setData({ loading: true })
    
    // 分类测试数据
    const testJokesMap = {
      '全部': [
        {
          id: 101,
          content: '为什么程序员不喜欢上班？因为每次上班都要面对好多bug，但是bug见了他却从来不叫他一声爸爸。',
          category: '职场笑话',
          likes: 233,
          shares: 66
        },
        {
          id: 102,
          content: '有一天，一个程序员在洗澡，突然灯泡坏了。他站在黑暗中思考了一会儿，然后说："让我重启一下试试。"',
          category: '程序员笑话',
          likes: 456,
          shares: 89
        }
      ],
      '冷笑话': [
        {
          id: 201,
          content: '为什么蜗牛不喜欢玩跑步机？因为它觉得太快了，容易晕机。',
          category: '冷笑话',
          likes: 345,
          shares: 78
        },
        {
          id: 202,
          content: '什么东西越洗越脏？水。',
          category: '冷笑话',
          likes: 567,
          shares: 123
        }
      ],
      '热门笑话': [
        {
          id: 301,
          content: '老板：如果这次你能成功，我就给你加薪。员工：那如果失败呢？老板：那就祝你成功。',
          category: '热门笑话',
          likes: 888,
          shares: 234
        },
        {
          id: 302,
          content: '记者：你为什么要偷这么多钱？小偷：因为我对小偷这个职业太热爱了。',
          category: '热门笑话',
          likes: 999,
          shares: 345
        }
      ],
      '爱情笑话': [
        {
          id: 401,
          content: '女：你觉得我好看吗？男：我觉得你很有气质。女：那你觉得我胖吗？男：我觉得你很有气质。',
          category: '爱情笑话',
          likes: 777,
          shares: 234
        },
        {
          id: 402,
          content: '女友：你猜我现在在想什么？男友：在想我？女友：你真聪明！男友：谢谢夸奖！女友：错了，我在想你为什么这么自恋。',
          category: '爱情笑话',
          likes: 666,
          shares: 198
        }
      ],
      '无厘头笑话': [
        {
          id: 501,
          content: '问：辣椒为什么辣？答：因为它在生气。问：那为什么生气？答：因为它被人吃了。',
          category: '无厘头笑话',
          likes: 444,
          shares: 111
        },
        {
          id: 502,
          content: '一只蚂蚁在大象面前挺起了胸膛说："瞧，我比你高！"大象："你确定不是在我鼻子上吗？"',
          category: '无厘头笑话',
          likes: 555,
          shares: 167
        }
      ],
      '生活笑话': [
        {
          id: 601,
          content: '医生：你要多运动。病人：我每天都在打麻将啊！医生：那不是运动。病人：那你没见过我打麻将时有多激动！',
          category: '生活笑话',
          likes: 333,
          shares: 88
        },
        {
          id: 602,
          content: '妈妈：你为什么又迟到了？儿子：因为路上看到一个老奶奶在过马路。妈妈：那你扶她过马路了吗？儿子：没有，我在等她过完。',
          category: '生活笑话',
          likes: 222,
          shares: 67
        }
      ],
      '职场笑话': [
        {
          id: 701,
          content: '老板：你迟到了。员工：对不起，我今天走快了点。老板：什么意思？员工：平时都是跑着来的。',
          category: '职场笑话',
          likes: 678,
          shares: 234
        },
        {
          id: 702,
          content: '面试官：你有什么特长？应聘者：我特别会讲笑话。面试官：讲一个听听。应聘者：我的工资要求是15000。',
          category: '职场笑话',
          likes: 789,
          shares: 345
        }
      ]
    }
    
    setTimeout(() => {
      // 根据当前分类获取对应的笑话
      const jokes = this.data.currentCategory === '全部' 
        ? Object.values(testJokesMap).flat()
        : testJokesMap[this.data.currentCategory] || []
      
      console.log('当前分类笑话：', jokes)
      this.setData({
        jokes: [...this.data.jokes, ...jokes],
        page: this.data.page + 1,
        hasMore: jokes.length === 10,
        loading: false
      }, () => {
        console.log('数据更新后的jokes:', this.data.jokes)
      })
    }, 500)  // 模拟网络延迟
  },

  // 分类切换
  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category
    console.log('切换分类:', category)
    this.setData({
      currentCategory: category,
      jokes: [],
      page: 1,
      hasMore: true
    }, () => {
      this.loadJokes()
    })
  },

  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新')
    this.setData({
      jokes: [],
      page: 1,
      hasMore: true
    }, () => {
      this.loadJokes()
      wx.stopPullDownRefresh()
    })
  },

  // 触底加载更多
  onReachBottom() {
    console.log('触底加载更多')
    this.loadJokes()
  }
})