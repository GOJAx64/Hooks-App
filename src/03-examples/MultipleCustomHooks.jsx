import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='text-blue-700 font-bold'>BreakingBad Quotes</h1>
            <hr className='pt-2 border-slate-900'/>
            {
                isLoading ? <LoadingQuote /> : <Quote author={ author } quote={ quote } />
            }
            <br />       
            <button 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </div>
    )
}