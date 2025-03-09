const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  const { category = '全部', page = 1 } = event
  console.log('云函数收到请求：', event)  // 添加日志
  
  try {
    // 返回测试数据
    const jokes = [
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
        category: '校园笑话',
        likes: 120,
        shares: 45
      }
    ]
    
    console.log('云函数返回数据：', jokes)  // 添加日志
    
    return {
      code: 0,
      data: jokes,
      message: 'success'
    }

  } catch (error) {
    console.error('云函数错误：', error)  // 添加日志
    return {
      code: -1,
      data: null,
      message: error.message
    }
  }
}