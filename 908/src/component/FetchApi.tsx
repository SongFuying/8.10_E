import { useEffect, useState } from 'react'

export default function FetchApi() {
  //抓了数据 要存到前端模块中
  const [list, setList] = useState([])

  //fetch -> promise
  useEffect(() => {
    //async 异步函数
    const getApi = async () => {
      //服务器抓数据要一步一步 有顺序的执行的 异步 -> js是同步 所有函数同时执行
      //await 后面的程序执行完 才会执行下一行 如果没执行完 永远在这执行
      //RestFulApi -> GET POST DELETE PUT -> 查增删改 -> 增删改查
      const res = await fetch('https://jsonplaceholder.typicode.com/albums')
      const data = await res.json()
      console.log(data)
    }
    getApi()
  }, []) //后面的数组 是钩子的依赖项 依赖项改变 前面的函数会再次执行

  return <div>FetchApi</div>
}
