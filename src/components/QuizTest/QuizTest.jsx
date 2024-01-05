import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
export const QuizContext = createContext();

const QuizTest = () => {
    const data = useLoaderData();
    const quizs = data.data.questions;
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0)

    const handleCount1 = () =>{
        setCount1(count1 + 1)
    }
    const handleCount2 = () =>{
        setCount2(count2 + 1)
    }
    
    return (
        
        <div>
            <h1 className='text-center mt-4 font-bold text-violet-800 text-2xl'>Quiz of {data.data.name}</h1>
            <div className='text-center flex justify-center m-4 text-blue-500 font-bold font-sans'>
                <h3>Total correct: {count1}</h3>
                <h3 className='ml-2'>Total wrong: {count2}</h3>
            </div>
            <div className='grid grid-cols-2 mt-5'>
            <QuizContext.Provider value={[handleCount1,handleCount2]}>
                {
                    quizs.map((quiz,i) => <Quiz key={i} quiz={quiz}></Quiz>)
                }
            </QuizContext.Provider>
            </div>
        </div>
    );
}

export default QuizTest;