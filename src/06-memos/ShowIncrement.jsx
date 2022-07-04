import React from 'react';


export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' Me volví a generar :( ');

    return (
        <button
        className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
