import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }


  return (
    <div className='absolute top-20 left-16 right-auto'>
        <h1 className='text-lg font-bold'>Focus Screen</h1>
        <hr className='pt-2 border-slate-400'/>

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="bg-gray-100 mb-2.5 border border-gray-400 text-gray-900 text-sm rounded-lg p-2"
        />

        <button 
            className="mx-1 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
            onClick={ onClick }
        >
            Set focus
        </button>

    </div>
  )
}