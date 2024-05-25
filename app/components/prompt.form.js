"use client";
import React from 'react'
import { useState } from 'react';
function Promptfrm({onSubmit, onClear}) {
    const [prompt,setPrompt] = useState("")
    const handleClear = () =>{
        setPrompt("")
    }
    return (
        (
        <div className='bg-gray-800 w-[400px] rounded-2xl'>
           <form className="flex flex-col gap-10 items-center p-10" onSubmit={(e)=>{
                e.preventDefault();
                if(prompt === ""){
                    return;
                }
                onSubmit(prompt);
                setPrompt("")
           }}>
            <label className='text-2xl' htmlFor="question">Ask your question here</label>
            <input 
                className="w-full sm:w-auto text-black p-2 rounded-lg" 
                type="text" 
                name='question' 
                value={prompt} 
                onChange={(e) => {
                    setPrompt(e.target.value)
                }} 
            />
            <div className='flex flex-row w-full justify-evenly gap-6'>
            <input className="p-2 rounded-md bg-gradient-to-l w-full from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500" type="submit" />
            <button className="p-2 rounded-md bg-gradient-to-l w-full from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500"
                onClick={onClear}
            >Clear</button>
            </div>
           </form>
        </div>
        )
    )
}

export default Promptfrm
