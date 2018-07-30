# Front-router-demo
前端路由原理，用来演示如何实现一个纯前端的路由功能 <br/>
前段路由主要分为以下几种：
- hash路由，即利用在url上添加hash值的方式，其原理就是利用锚点。
- browser路由，即使用html5标准中的history api通过监听popstate事件来对dom进行操作
- memory路由，曾经在使用dojo-mobile的时候使用，即在内存中维护一个路由堆栈，通过监听前进后退来对堆栈进行操作，从而达到路由切换的目的，实现和维护极其复杂，目前react-native也采用这种方式
- static路由，主要用于ssr。需要后端去管理路由。

## hash路由 优缺点
- 优点
 - - 实现简单，兼容性好（兼容到ie8）
 - - 绝大多数前端框架均提供了给予hash的路由实现
 - - 不需要服务器端进行任何设置和开发
 - - 除了资源加载和ajax请求以外，不会发起其他请求
 
- 缺点
 - - 对于部分需要重定向的操作，后端无法获取hash部分内容，导致后台无法取得url中的数据，典型的例子就是微信公众号的oauth验证
 - - 服务器端无法准确跟踪前端路由信息
 - - 对于需要锚点功能的需求会与目前路由机制冲突

## browser路由 优缺点
- 优点
 - - 对于重定向过程中不会丢失url中的参数。后端可以拿到这部分数据
 - - 绝大多数前端框架均提供了browser的路由实现
 - - 后端可以准确跟踪路由信息
 - - 可以使用history.state来获取当前url对应的状态信息

- 缺点 
 - - 兼容性不如hash路由(只兼容到IE10)
 - - 需要后端支持，每次返回html文档

## memory路由 优缺点
- 优点
 - - 不存在兼容性问题，路由保存在内存中
 - - 不需要服务器端提供支持

- 缺点
 - - 目前很少有前端路由模块提供对memory路由的实现(react-router提供了memory实现)
 - - 自己实现难度较大，且工作量也很大
 - - 对于前进后退操作的路由管理非常麻烦，尤其是android设备
 
## static路由 优缺点
该路由方式主要用于ssr。不做比较。
