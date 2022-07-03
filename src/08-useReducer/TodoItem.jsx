
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          onClick={ () => onToggleTodo( todo.id ) }
          className="bg-gray-100 mb-2.5 border border-gray-400 space-x-32 text-gray-900 text-sm rounded-lg p-2 text-decoration-line-through"
          aria-label="span"
        >
          { todo.description }
        </span>
        <button 
          className="mx-1 mt-2 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1 text-center"
          onClick={ () => onDeleteTodo( todo.id ) }
        >
          x
        </button>
    </li>
  )
}
