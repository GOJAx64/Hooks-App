import { useState } from 'react'

export const CounterApp = () => {
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    
    const { counter1, counter2, counter3  } = state;
    
    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-gray-700 font-bold'>
                Counter with an object in the useState
            </h1>
            <hr className='pt-2 border-slate-400'/>
            <h1 className='bg-gray-100 mb-2 border border-blue-600 space-x-32 text-blue-800 text-sm rounded-lg block p-2'>Counter 1: { counter1 } </h1>
            <h1 className='bg-gray-100 mb-2 border border-gray-400 space-x-32 text-gray-800 text-sm rounded-lg block p-2'>Counter 2: { counter2 } </h1>
            <h1 className='bg-gray-100 mb-2 border border-gray-400 space-x-32 text-gray-800 text-sm rounded-lg block p-2'>Counter 3: { counter3 } </h1>
            <hr className='pt-2 border-slate-400'/>
            <button 
                onClick={ () => setCounter({ ...state, counter1: counter1 +1})}
                className="mx-1 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center" 
            >+1</button>
        </div>
    )
}
