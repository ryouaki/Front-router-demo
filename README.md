# Front-router-demo
前端路由原理，用来演示如何实现一个纯前端的路由功能 <br/>
前段路由主要分为以下几种：
- hash路由，即利用在url上添加hash值的方式，其原理就是利用锚点。
- browser路由，即使用html5标准中的history api通过监听popstate事件来对dom进行操作
- memory路由，曾经在使用dojo-mobile的时候使用，即在内存中维护一个路由堆栈，通过监听前进后退来对堆栈进行操作，从而达到路由切换的目的，实现和维护极其复杂，目前react-native也采用这种方式
- static路由，主要用于ssr。需要后端去管理路由。

# hash路由 优缺点
- 优点
- - > 实现简单，兼容性好（兼容到ie8）
- - > 
