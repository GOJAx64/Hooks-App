import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [quote])
  

  return (
    <>
      <div className='bg-slate-300 p-2 mx-1 md:mx-1 rounded-lg'>
        <blockquote 
          className="text-slate-700 text-center m-2"
        > 
          <p ref={ pRef } className="">{ quote }</p>
        </blockquote>
        <cite className="text-slate-500 relative rigth-0">{ author } </cite>
      </div>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}