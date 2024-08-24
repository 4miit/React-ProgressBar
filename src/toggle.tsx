import { useState } from 'react';
import App from './App.tsx';

 export default function Toggle(){

    const[show,setShow] = useState(true);


    return(
        <>
        <div className="heading">Progress-Bar</div>
        {show ? <App/> : ""}
        <button onClick ={() => setShow(!show)}> 
                   TOGGLE  
             </button>
        </>
    )
 }