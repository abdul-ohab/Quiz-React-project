import Options from '../Options/Options';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import './Quiz.css';
import { useState } from 'react';

const Quiz = ({quiz}) => {
    const {options, question, correctAnswer} = quiz;
    const [green, setGreen] = useState();
    const [open, setOpen] = useState(false);

    const hideGreen = () =>{
        event.stopPropagation()
        if(open){
            const mainDiv = event.target.parentElement.parentElement.parentElement.parentElement.children[1];
            for(let i=0; i<mainDiv.length; i++){
                div[i].classList.remove('correct')
            }
            console.log(mainDiv)
        }
    }
    
    return (
        <div className='m-3 border-solid border-2 p-4 rounded-md border-blue-300'>
            <div className='flex items-center justify-between'>
                <p className='m-5 font-bold'>{question}</p>
                <div className='buttons'>
                <button onClick={() =>{setGreen(true), setOpen(!open), hideGreen()}} className="h-6 font-bold w-6 cursor-pointer text-blue-600">
                    {
                        open? <EyeSlashIcon/> : <EyeIcon/>
                    }
                </button>
                </div>
                
            </div>
            <div className='grid grid-cols-2 gap-3 m-3 allOption'>
            {
                options.map((option,i) => <Options

                    key={i}
                    option={option}
                    correctAnswer={correctAnswer}
                    green={green}
                    open={open}
                
                ></Options>)
            }
            </div>
        </div>
    );
};

export default Quiz;