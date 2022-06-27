import { useEffect } from 'react';

export const Message = () => {
  
    useEffect(() => {
        const onMouseMove = ({ x, y}) => {
            const coords = { x, y };
            console.log(coords);  
        } 

        window.addEventListener('mousemove', onMouseMove );
    
        return () => {
            window.removeEventListener('mousemove', onMouseMove );
        }
    }, []);
    

    return (
    <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-2 py-1.5 rounded relative'>
        <h3 className='font-bold'> User exists</h3>
    </div>
  )
}
