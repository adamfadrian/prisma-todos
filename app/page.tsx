import TodoItems from '@/components/TodoItems'
import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'

const getTodos = () => {
  return prisma.todo.findMany()
}

async function toggleTodos(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({
    where: { id }, data: { complete }
  })
}
export default async function Home() {
  // await prisma.todo.create({ data: { title: 'test', complete: false } })
  const todos = await getTodos()
  return (
    <>
      <header className='flex justify-between items-center mb-4 text-whtie'>
        <h1 className='text-2xl'>Todos</h1>
        <Link href='/new' className=' border px-3 py-1 rounded-lg hover:bg-slate-500 outline-none'>New</Link>
      </header>
      <ul className='pl-4 text-white'>
        {todos.map(todo => (
          <TodoItems toggleTodo={toggleTodos} key={todo.id} {...todo} />

        ))}
      </ul>
    </>
  )
}
