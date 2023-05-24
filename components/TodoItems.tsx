"use client"

type TodoProps = {
    id?: string | any
    title?: string
    complete?: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

const TodoItems = ({ id, title, complete, toggleTodo }: TodoProps) => {
    return (
        <>
            <li className='flex gap-2 items-center text-white'>
                <input type="checkbox" id={id} className='cursor-pointer peer' defaultChecked={complete} onChange={e => toggleTodo(id!, e.target.checked)} />
                <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-300'>{title}</label>
            </li>
        </>
    )
}

export default TodoItems