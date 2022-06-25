import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <>
            <h1 className='text-gray-700 text-base'>
                Counter with Custom Hook: { counter }
            </h1>

            <button 
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                onClick={ () => increment(2) }> 
                + 1
            </button>
            <button 
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                onClick={ () => decrement(2) }> 
                - 1
            </button>
            <button 
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                onClick={ reset }> 
                Reset
            </button>
        </>
        
    )
}
