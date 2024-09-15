import { useState } from 'react'
import './index.css'

function Home() {
  //let count = 0
  //setCount -> 函数 -> 修改count的值
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prev => prev + 1)
  }

  const minus = () => {
    setCount(prev => prev - 1)
  }

  const a = JSON.stringify('JSON')

  return (
    <>
      <div className="h-full w-full absolute">
        <div className="relative my-4">
          <div className="flex flex-row">
            <div className="mr-4">Count</div>
            <button onClick={add} className="bg-slate-600 border-2">
              add
            </button>
            <button onClick={minus} className="bg-grey-600 border-2">
              minus
            </button>
          </div>
          <ul>
            <li>Number:{count}</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
