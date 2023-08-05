"use client"
type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}
export function TodoItem(item: TodoItemProps) {
    return <li>
        <input id={item.id} type="checkbox" defaultChecked={item.complete}
            onChange={(e) => { item.toggleTodo(item.id, e.target.checked) }}
            className="cursor-pointer peer" />
        <label htmlFor={item.id} className="peer-checked:line-through ml-3 text-lg
        peer-checked:text-gray-400 peer-checked:cursor-not-allowed
        ">{item.title}</label>
    </li>
}