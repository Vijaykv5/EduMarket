import React from 'react';
import Navbar from './Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Hero from '../assets/Study.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
        console.log('hi');
    };
    
    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl sm:text-8xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary drop-shadow" onClick={handleClick}>Get Started <AiOutlineArrowRight /></button>
                    </div>
                    <img src={Hero} onClick={handleClick} className="max-w-sm drop-shadow-none rounded-lg shadow-2xl" alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Home;
