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
        <>
            <h1>Simple Form</h1>
            <hr />
            <br />
            <input
                type='text'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Username'
                name='username'
                value= { username }
                onChange={ onInputChange }
            />
            <input
                type='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Username@gmail.com'
                name='email'
                value= { email }
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
