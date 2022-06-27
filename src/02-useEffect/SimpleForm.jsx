import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'alberto@gmail.com',
    });
    
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const  { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    useEffect(() => {
        //console.log('Use effect called!');
    }, []);

    useEffect(() => {
        //console.log('formState changed!');
    }, [ formState ]);

    useEffect(() => {
        //console.log('email changed!');
    }, [ email ]);
    
    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-blue-700 font-bold'>Simple Form</h1>
            <hr className='pt-2 border-blue-400'/>
            <input
                type='text'
                className='bg-gray-100 mb-2.5 border border-gray-400 space-x-32 text-gray-800 text-sm rounded-lg block p-2'
                placeholder='Username'
                name='username'
                value= { username }
                onChange={ onInputChange }
            />
            <input
                type='email'
                className='bg-gray-100 mb-2.5 border border-gray-400 space-x-32 text-gray-800 text-sm rounded-lg block p-2'
                placeholder='Username@gmail.com'
                name='email'
                value= { email }
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }
        </div>
    )
}
