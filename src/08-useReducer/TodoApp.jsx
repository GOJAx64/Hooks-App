import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>
            <hr className='pt-2 border-slate-400'/>
            <div className="fixed top-20 left-16 right-auto grid grid-cols-2">
                <h1>Total: { todosCount }, <small>due: { pendingTodosCount }</small> </h1>
                <hr />
                <div className="">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="">
                    <h4 className='text-lg font-bold'>Add To-Do</h4>
                    <hr className='pt-2 border-slate-400'/>
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
