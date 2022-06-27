import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;
  
    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-lg font-bold'>Form with custom Hook</h1> 
            <hr className='pt-2 border-slate-400'/>
            
            <input 
                type="text" 
                className="bg-gray-100 mb-2.5 border border-gray-400 space-x-32 text-gray-800 text-sm rounded-lg block p-2"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="bg-gray-100 mb-2.5 border border-gray-400 space-x-32 text-gray-900 text-sm rounded-lg block p-2"
                placeholder="alberto@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="bg-gray-100 border mb-2.5 border-gray-400 space-x-32 text-gray-900 text-sm rounded-lg block p-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                onClick={ onResetForm } 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
            >Reset
            </button>

        </div>
    )
}