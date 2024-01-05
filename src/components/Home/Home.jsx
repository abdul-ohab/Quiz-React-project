import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Skill from '../Skill/Skill';

const Home = () => {
    const data = useLoaderData();
    const datas = data.data;

    return (
        <div className='grid grid-cols-2 justify-center items-center mt-12'>
            {
                datas.map((data,i) => <Skill key={i} data={data}></Skill>)
            }
        </div>
    );
};

export default Home;