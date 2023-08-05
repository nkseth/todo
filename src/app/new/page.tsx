import { prisma } from "@/src/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createTodo(data: FormData) {
    "use server"
    console.log("Hi")
    const title = data.get("title")?.valueOf() as string | undefined
    if (!title || title.length === 0) {
        throw new Error("Title is required")
    }
    await prisma.todo.create({ data: { title, complete: false } })
    redirect("/")
}

const NewPage = () => {
    return <>
        <header className="flex justify-between ">
            <h1 className="text-2xl">Todos</h1>
            <Link href={"/"} className="px-4 py-2 rounded-lg hover:bg-slate-600 focus-within:bg-slate-600 border-2 border-white">Back</Link>
        </header>
        <form action={createTodo} className="flex flex-col p-4">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" className="border-2 bg-black my-4 focus:outline-none border-gray-400 rounded-lg min-h-[50px] text-lg px-3" />
            <div className="flex gap-3">
                <Link href={"/"} className="px-4 py-2 rounded-lg w-fit hover:bg-slate-600 focus-within:bg-slate-600 border-2 border-white">Cancel</Link>
                <button type="submit" className="px-4 py-2 rounded-lg w-fit hover:bg-slate-600 focus-within:bg-slate-600 border-2 border-white">Save</button>
            </div>
        </form>
    </>
}

export default NewPage