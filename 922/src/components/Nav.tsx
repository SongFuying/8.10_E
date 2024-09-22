import React from 'react'
import { ModeToggle } from './ModeToggle'

//Title模块

export default function Nav() {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">Hello!Master!</h2>
        <p className="text-md text-muted-foreground">Here is your TodoList</p>
      </div>
      <div>
        {/* 暗黑模式去ShadCN官网getting Start中找 */}
        <ModeToggle />
      </div>
    </div>
  )
}
