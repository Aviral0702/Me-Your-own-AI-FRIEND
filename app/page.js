"use client";
import { useState } from "react";
import Promptfrm from "./components/prompt.form";
import Example from "./components/Navbar";
export default function Home(){
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleClear = async () =>{
    setChoices([]);
  }
  return(
    <div>
    <Example/>
    <div className="flex flex-col items-center mt-40  gap-10">
      
      <Promptfrm onSubmit={async (prompt)=>{
        setIsLoading(true);
        const response = await fetch('/api/chatgpt',{
          method: 'POST',
          headers :{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
          }),
        });
        
        const result = await response.json();
        setChoices(result.choices);
        setIsLoading(false);
      
      
      }} onClear = {handleClear}/>
      {choices.map(choice => {
        return(
          <>
              {isLoading && <p className="w-auto mt-10 text-center rounded-xl p-4 text-2xl font-bold text-black bg-white text-opacity-100 bg-opacity-15">Loading...</p>}
              {!isLoading && (
                <p
                className="w-full mx-4 sm:w-auto mb-4 sm:mb-10 max-w-full sm:max-w-6xl mt-4 sm:mt-6 text-center rounded-xl p-2 sm:p-4 text-xl sm:text-2xl font-bold text-black bg-white text-opacity-100 bg-opacity-15"                  key={choice.index}
                >
                  {choice.message.content}
                </p>
              )}
            </> )
        })}
    </div>
    </div>
  )
}