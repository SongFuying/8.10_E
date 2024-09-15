import { useEffect, useState } from 'react'

//解决下面的类型错误
// interface Iitem{

// }

export default function FetchApi() {
  //抓了数据 要存到前端模块中
  const [list, setList] = useState([])

  //fetch -> promise -> fulfilled 待定状态 -> 还没有解决resolve 就执行了后面的程序
  //await -> 后面 + promise
  useEffect(() => {
    //async 异步函数
    //GET
    const getApi = async () => {
      //服务器抓数据要一步一步 有顺序的执行的 异步 -> js是同步 所有函数同时执行
      //await 后面的程序执行完 才会执行下一行 如果没执行完 永远在这执行
      //RestFulApi -> GET POST DELETE PUT -> 查增删改 -> 增删改查
      const res = await fetch('https://jsonplaceholder.typicode.com/albums')
      const data = await res.json()
      console.log(data)
      setList(data)
      return data
    }
    getApi()

    //     //POST
    //     const postApi = async () => {
    //       {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/albums/posts', {
    //           method: 'POST', //'PUT DELETE'
    //           headers: {
    //             'Content-type': 'application/json; charset=UTF-8' //告诉后端提交的文件是json
    //           },
    //           body: JSON.stringify({
    //             userId: 0,
    //             id: 0,
    //             title: 'postTest'
    //           })
    //         })
    //         const data = await res.json()
    //         console.log(data)
    //       }
    //     }
    //     postApi()
  }, []) //后面的数组 是钩子的依赖项 依赖项改变 前面的函数会再次执行

  return (
    <>
      {list &&
        list.map(item => {
          return (
            <div key={item.userId} className="flex flex-start space-x-2 border-2">
              <div className="p-4 border-r-2">Id:{item.id}</div>
              <div className="flex justify-center items-center">Title:{item.title}</div>
            </div>
          )
        })}
    </>
  )
}
