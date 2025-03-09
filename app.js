App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'cloud1-2g9wtbkg9690e80f',  // 例如：joke-dev-1g4xxxxx
        traceUser: true,
      })
    }
  }
}) 