import React, { useContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';
import { QuizContext } from '../QuizTest/QuizTest';

const Options = ({option,correctAnswer,green}) => {

    const [correctOption, setSelectedOption] = useState(false)
    const [wrongOption, setWrongOption] = useState(false)
    const [handleCount1, handleCount2] = useContext(QuizContext)

    const right = option === correctAnswer;
    const wrong = option !== correctAnswer;

    const checkCorrect = () =>{
        const mainDiv = event.target.parentElement.parentElement.parentElement.children;
        for(let i=0; i<mainDiv.length; i++){
            mainDiv[i].childNodes[0].children[0].disabled = true;
            const divs = mainDiv[i];
            const button =mainDiv[i].children[0];
            const leves = mainDiv[i].children[1];
            
            divs.classList.add('common');
            button.classList.add('common');
            leves.classList.add('common');
           
        }
        
    }
  
    const findAnsware = () =>{
        if(right){
            toast.success('Your answer is right',{
                autoClose: 1500,
                hideProgressBar: true,
                position: toast.POSITION.BOTTOM_CENTER,
            });
           setSelectedOption(right)
           handleCount1()
           checkCorrect()
        }
        if(wrong){
            toast.error('your answer is wrong',{
                autoClose: 1500,
                hideProgressBar: true,
                position: toast.POSITION.BOTTOM_CENTER
            });
           handleCount2()
           checkCorrect()
           setWrongOption(wrong);
        }
        
    }   

    return (

        <div className={`option ${green === right ? 'correct': ''} ${correctOption? 'correct': wrongOption? 'wrong':undefined}`}>
            <button><input onClick={() =>findAnsware()} type="radio" id='option' name="question" value="OPTION"></input></button>
            <span className='lavel'>{option}</span>
            <ToastContainer/>
        </div>

    );
};

export default Options;