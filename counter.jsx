import './App.css'
import { useState } from 'react';
function Counter()
{
    let [count, setCount] = useState(0);

    function IncCount(){
        setCount(count+1);
    }
    
    return(
        <>
         <h3 className="counter" onClick={IncCount}>count = {count}</h3>
        </>
    )
}

export default Counter;
