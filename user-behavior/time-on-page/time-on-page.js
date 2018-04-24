var domP = document.querySelector('p')
var domButton = document.querySelector('button')
domButton.onclick = function () {
  window.open(window.location.href)
}
// 刷新或重新打开的安全时间
let keepTimeStep = 30 * 1000
function initInfo () {
  // 可添加uid等用户信息、页面信息进行访问标识
  let temp = JSON.parse(localStorage.getItem('WEB_USER_TIME'))
  if (!temp) {
    // 构建新的
    temp = {
      num: 1,
      startTime: new Date()
    }
  } else if (temp.num <= 0 && new Date().getTime() - new Date(temp.endTime).getTime() < keepTimeStep) {
    // 上次关闭30秒内，使用原有
    temp = {
      num: 1,
      startTime: temp.startTime
    }
  } else {
    // 开启新页面，pagenum++
    temp = {
      num: temp.num + 1,
      startTime: temp.startTime
    }
  }
  domP.innerHTML = '当前打开页面：' + temp.num + '，打开时间为' + temp.startTime
  localStorage.setItem('WEB_USER_TIME', JSON.stringify(temp))
}
initInfo()
function closeHandler (e) {
  debugger
  let temp = JSON.parse(localStorage.getItem('WEB_USER_TIME'))
  if (!temp || temp.num <= 0) {
    // 无则无效
    return
  } else {
    // -1或置为0
    temp = {
      num: temp.num - 1 <=0 ? 0 : temp.num - 1,
      startTime: temp.startTime
    }
  }
  if (temp.num === 0) {
    // 发送请求
    // let domScript = document.createElement('script')
    // domScript.src = 'http://192.168.1.9:3000/test'
    // document.body.appendChild(domScript)
    // 测试 chrome edge ie9可触发，其他未测试
    $.get({
      url: 'http://192.168.1.9:3000/test',
      data: {
        time: new Date().getTime() - temp.startTime
      },
      async: false // 需使用同步请求，保证服务器在页面关闭前可接收到请求
    })
    debugger
    // 记录关闭时间，用作刷新判断
    temp.endTime = new Date()
  }
  localStorage.setItem('WEB_USER_TIME', JSON.stringify(temp))
}
window.onunload = closeHandler