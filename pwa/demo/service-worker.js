// https://github.com/minimal-xyz/minimal-pwa/blob/master/sw.js

console.log('Script loaded!')
// 声明当前缓存标志
var cacheStorageKey = 'minimal-pwa-9'

// 配置缓存文件信息
var cacheList = [
  '/',
  "index.html",
  "./css/style.css"
]
// 注册完成安装 Service Worker 时, 抓取资源写入缓存
self.addEventListener('install', function(e) {
  console.log('Cache event!')
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      console.log('Adding to Cache:', cacheList)
      return cache.addAll(cacheList)
    }).then(function() {
      console.log('Skip waiting!')
      return self.skipWaiting()
    })
  )
})
// 启用时，
self.addEventListener('activate', function(e) {
  console.log('Activate event')
  e.waitUntil(
      caches.keys().then(cacheNames => {
        // 由于我们的caches中可能缓存很多版本，过滤出其他版本
        return cacheNames.filter(name => name !== cacheStorageKey)
      }).then(cachesToDelete => {
        // 全部删除
        return Promise.all(cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        }));
      }).then(() => {
      console.log('Clients claims.')
      // 获得控制权
      return self.clients.claim()
    })
  )
})

// 处理fetch
self.addEventListener('fetch', function(e) {
  // console.log('Fetch event:', e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response != null) {
        // 匹配成功
        console.log('Using cache for:', e.request.url)
        return response
      }
      // 无匹配，继续请求
      console.log('Fallback to fetch:', e.request.url)
      return fetch(e.request.url)
    })
  )
})