import { useForm } from '../hooks/useForm';


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>    
            <input 
                type="text" 
                placeholder="What is there to do?"
                className="bg-gray-100 mb-2 border border-gray-400 space-x-32 text-gray-900 text-sm rounded-lg p-1.5 mr-1"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-1.5 text-center"
            >
                +
            </button>
        </form>
    )
}
