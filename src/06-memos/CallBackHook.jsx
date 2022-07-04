import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <div className='fixed top-20 left-16 right-auto'>
            <h1 className='font-bold'>useCallback Hook: { counter } </h1>
            <hr className='pt-2 border-slate-900'/>

            <ShowIncrement increment={ incrementFather } />
        </div>
    )
}