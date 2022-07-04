import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <div className="absolute top-10 left-12 right-auto">
                <div className="">
                    <h4 className='text-lg font-bold'>To-Do App</h4>
                    <h4 className='text-sm text-blue-900 text-blue-900'>Total: { todosCount } - <small className='text-zinc-500'>due: { pendingTodosCount }</small> </h4>
                    <hr className='pt-2 border-slate-400'/>
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
                <div className="">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
            </div>
        </>
    )
}
