'use client'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  todoItem: z.string().min(2).max(50)
})

export default function ItemInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoItem: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    alert(values.todoItem)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="todoItem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TodoItem</FormLabel>
              <FormControl>
                <Input placeholder="enter your TodoItem" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
