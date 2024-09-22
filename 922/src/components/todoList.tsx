import React from 'react'
import ItemInput from './ItemInput'
import List from './List'
import Nav from './Nav'

const modeMargin = 'm-8'

export default function TodoList() {
  return (
    <div>
      <div className={modeMargin}>
        <Nav />
      </div>
      <div className={modeMargin}>
        <ItemInput />
      </div>
      <div className={modeMargin}>
        <List />
      </div>
    </div>
  )
}
