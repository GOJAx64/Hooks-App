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
        <>
            <h1>Formulario con custom Hook</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className=""
                placeholder="alberto@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className=""
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />


            <button onClick={ onResetForm } >Borrar</button>

        </>
    )
}