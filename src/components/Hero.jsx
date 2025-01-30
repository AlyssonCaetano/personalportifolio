import "react";
import HeroImage from '../assets/hero-image.jpg';
const Hero = () => {
    return (
        <div className="bg-black text-white text-center py-16">
            <img 
                src={HeroImage} 
                alt="hero-image"
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I´m {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Caetano </span>
                Front-And Developer
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                I specialize in building modern and responsive web application.
            </p>
            <div className="mt-8 space-x-4">
                <button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                    >Contact Whith Me
                </button>
                <button
                    className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                        Resume
                </button>
            </div>
        </div>
    );
};

export default Hero;