import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-gray-700 text-base font-bold'>
                Counter with Custom Hook: { counter }
            </h1>
            <hr className='pt-2 border-slate-400'/>
            <button 
                className="mx-1 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
                onClick={ () => increment(1) }> 
                + 1
            </button>
            <button 
                className="mx-1 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
                onClick={ () => decrement(1) }> 
                - 1
            </button>
            <button 
                className="mx-1 mt-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
                onClick={ reset }> 
                Reset
            </button>
        </div>
        
    )
}
