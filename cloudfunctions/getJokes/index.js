const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  const { category = '全部', page = 1 } = event
  
  try {
    // 模拟API调用，后续替换为 DeepSeek API
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
    
    return {
      code: 0,
      data: jokes,
      message: 'success'
    }

  } catch (error) {
    return {
      code: -1,
      data: null,
      message: error.message
    }
  }
} 