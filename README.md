# .md -> markdown

- 9.8

.md网络博客的笔记的形式

metaverse -> facebook -> meta

react -> webApp前端框架 -> 基本项目文件 -> 什么是SPA？-> SPA的好处和坏处 -> 会给用户有什么新的体验？(html css js) -> 客户端速度快
react-native -> 移动端前端框架

尤雨溪(google -> 独立) -> javascript -> vue(国内用这个) react(facebook)
`vite` -> 前端工程化 -> 最快的的一个打包工具
`bun` -> 比npm快1000倍
`webpack和npm` -> 过时了

`npm install vite@latest` -> 使用vite创建项目 -> 很现代 有hmr（热更新）-> 打包速度快 -> 运行速度快 -> rust
如果用 `npm install react` -> 是用一个很老的东西webpack -> 打包速度慢 -> 运行速度慢

`npm i` -> 安装react后要运行 -> 自动安装依赖

`typescript` -> 微软开发的javascript的超集 -> 引入强类型

测试自己新建项目`vite -> react -> tailwind`

react -> SPA(single page applicantion) -> 前端框架 -> 组件化 -> 模块化 -> x -> instagram -> 单页面的应用

html页面 -> script 导入js

.jsx(tsx) -> .js/ts -> 可以在js中写html -> 写html的部分 `必须要return`

SDN -> 远程引用 -> 比如本地的包过大 很占用服务器空间 -> 运行速度慢
`盒子模型` 里到外 context(tailwind -> h- w-) -> padding内边距(p) -> border边框(border) -> margin外边距（m-）

`flex` -> 每个元素的间隔是 `space-x-2`
flex-row
flex-col
flex-start
flex-end
flex-center
...

`grid`
grid-cols-1
grid-cols-2
grid-cols-3

react -> hooks（状态钩子）
react18之前常用
`useState` -> 状态钩子 -> 状态钩子 -> 自己发展 他还能干嘛？？？
`useEffect` -> 副作用钩子 -> 副作用钩子 -> react19中可以基本不太用了
`useRef` -> 引用钩子 -> 引用钩子

react19 -> 进阶有难度
`use` -> 远程抓数据库 (promise)
`useTransition` -> 远程数据库可以灰色loading
`useDeferredValue`

`{}` -> backet胡子

四则运算符号
`+` `-` `*` `/` -> 这个是除法 `%` -> 取余数

`==` -> 值相等 -> 类型可以不一样 可以推演 `2 = '2' -> true`
`===` -> 值和类型都相等 `2 === '2' -> false`
`!-=` -> 不想等 `2 !== 1 -> true`
`<=`
`>=`

`&&` -> 与 -> 都为真 才为真 -> `true && true -> true`
`||` -> 或
`!` -> 非

- 9.15
- 适用性设计 -> 基于目标的习惯进行设计 -> ps/ai/adobe系列 -> 基于这些东西设计快捷键 -> 用户体验很好
- 无障碍设计(universal Design) -> 所有的用户都可以用你的东西 -> 微信(老人模式)
- `www.npmjs.com` -> 插件的网站 -> 可以自己发布的
- `bun i` -> 安装依赖(Dependency)
- `bun add xxx` = `npm instal xxx` -> 添加依赖 -> 生产环境 -> `bun add -D xxx` -> 安装到开发环境
- `bun dev`
- `bun build`

- 和数据库后端进行交互
  - 程序中 前端 -> frontEnd -> 和用户直接进行交互
  - 后端 -> BackEnd -> 设计师不会做这个 -> 纯正的程序员 -> 和服务器做交互 -> 从数据库中拿数据 发送给前端
  - 如何拿数据到前端？
    - 后端 -> 后端api -> `https://jsonplaceholder.typicode.com/albums` -> 文件格式JSON(javascript object notation) -> 可以跨语言识别(适合语言都可以识别JSON) -> 前端和后端用的编程语言是不一样的js/ts 后端java/go/python/c#/php
    - `JSON.stringify('JSON文件')` -> JSON转换为js可以识别的部分
    - `JSON.parse（'js的对象数组'）`
  - RestFulApi -> GET POST DELETE PUT -> 查增删改 -> 增删改查
  - `git pull` -> 无法拉去？
  - 异步async 和同步 -> 教程
  - await -> 后面 + promise 和async函数调用组合
  - tailWindCSS学习 + 美化表格 + ShadCN UI

- 9.22
  - React -> Next.js
    - 服务端渲染SSR(Server Side Render) -> 解决SEO的问题(搜索引擎中的排名) -> 服务器端将代码直接执行渲染好 -> 生成多个html -> 返回客户端 -> 服务端渲染的内容 无法与用户进行交互(交互要用的东西是js/ts) -> 静态展示页面（无交互）
    - 客户端渲染CSR(Client Side Render) -> 在客户端(浏览器)渲染 -> js直接发送给浏览器 -> 可以交互 -> 渲染的很慢 用户加载的时间长
    - 4秒原则 -> 加载时间控制在4秒之内
    - Next的优势 内部router(wwww.xxx.com/xxxx) -> xxxx是router切换
    - React Router
  - 响应式设计 -> 一套代码布局 -> 可以自动适应不同的端(电脑 平板 手机 -> 屏幕大小是不一样的) -> tailwind里 md(平板) lg(PC/Mac) sm（手机）
  - TodoList -> Title + Input（form/useRef）+ List(增删)
  - `bun create next-app` -> 新建nextJs项目
  - ESLint/prettier -> 检查代码格式的 -> 团队中工作代码格式要一致 -> 固定一套esLint
  - Zod -> 类型检测 -> 检测input的格式是否满足要求 邮箱的例子xxx@
  - shadCN -> 自由UI库
  - 大型封装UI库 -> 占资源 不自由
    - Material UI -> google的UI库 google的设计标准
    - Antd UI -> 阿里的UI库 阿里的标准
