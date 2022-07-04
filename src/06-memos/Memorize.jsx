import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState(true)

    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-blue-700 font-bold'>Counter: <Small value={ counter } />  </h1>
            <hr className='pt-2 border-slate-900'/>

            <button
                className="mt-1 mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1 text-center"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="mt-1 text-white bg-slate-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 text-center"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </div>
    )
}