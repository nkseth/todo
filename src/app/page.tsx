import Link from "next/link";
import { prisma } from "../db";
import { TodoItem } from "../components/TodoItem";

export default async function Home() {
  function getTodos() {
    return prisma.todo.findMany();
  }
  const todos = await getTodos()

  async function toggleTodo(id: string, complete: boolean) {
    "use server"
    await prisma.todo.update({ where: { id }, data: { complete } })
  }
  return (
    <><header className="flex justify-between ">
      <h1 className="text-2xl">Todos</h1>
      <Link href={"/new"} className="px-4 py-2 rounded-lg hover:bg-slate-600 focus-within:bg-slate-600 border-2 border-white">New</Link>
    </header>
      <ul className="ml-5">
        {
          todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))
        }
      </ul>
    </>
  )
}
