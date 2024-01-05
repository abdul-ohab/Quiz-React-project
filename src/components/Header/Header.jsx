import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div  className='max-w-6xl h-16 m-auto flex justify-between items-center'>
                <div className='text'>
                    <h2 className='text-2xl font-bold font-sans text-white italic'>Web Skills</h2>
                </div>
                <div className='link font-serif font-bold text-lg text-white'>
                    <NavLink className={({isActive}) => isActive? 'active' : undefined} to='/home'>Home</NavLink>
                    <NavLink to='/analysis'>Analysis</NavLink>
                    <NavLink to='/content'>Content</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;