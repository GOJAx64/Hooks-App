
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <div className='mt-1.5 flex'>  
          <span
            onClick={ () => onToggleTodo( todo.id ) }
            className={`bg-gray-100 w-5/6 text-gray-900 text-sm rounded-l-lg px-6 py-1 border border-gray-400 ${ todo.done ? 'line-through' : '' }`}
            aria-label="span"
          >
            { todo.description }
          </span>
          <button 
            className="text-white border border-gray-500 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-r-lg text-sm px-5 py-0.5 text-center"
            onClick={ () => onDeleteTodo( todo.id ) }
          >
            x
          </button>
        </div>
    </li>
  )
}
