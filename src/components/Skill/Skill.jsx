import React from 'react';
import './Skill.css';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Skill = ({data}) => {
    const {id,name,logo} = data;
    const navigate = useNavigate();

    const haldleNavigate = () =>{
        navigate(`/home/${id}`);
    }

    return (
        <div className='card m-3 p-5 rounded-md'>
            <img className='w-64 m-auto p-5' src={logo} alt="" />
            <div className='flex justify-evenly items-center'>
                <h2 className='text-xl font-bold text-pink-600'>{name}</h2>
                <button onClick={haldleNavigate} className='border-2 py-1.5 flex px-5 rounded-md text-md font-bold text-pink-600'>See Details <ArrowRightIcon class="h-6 ml-1 font-bold w-6 text-pink-700" /></button>
            </div>
        </div>
    );
};

export default Skill;