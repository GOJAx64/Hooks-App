import { useState } from 'react'

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (step = 1) => {
        setCounter( (counter) => (counter + step ));
    }

    const decrement = (step = 1) => {
        setCounter( (counter) => (counter - step) );
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}