import React from "react";

import memeGenerator from "../assets/portfolio/memeGenerator.jpg";
import weatherforecast from "../assets/portfolio/weatherforecast.jpg";
import CookShook from "../assets/portfolio/CookShook.png";
import ChessGame from "../assets/portfolio/Chess Game.png";
import fitness from "../assets/portfolio/Fitness.png";
import Chat from "../assets/portfolio/ChatApp.png"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: fitness,
            title: "Fitness Club",
        },
        {
            id: 2,
            src: Chat,
        },
        {
            id: 3,
            src: memeGenerator,
            title: "Meme Generator",
        },
        {
            id: 4,
            src: weatherforecast,
            title: "Weather Forecast App",
        },
        {
            id: 5,
            src: CookShook,
            title: "CookShook",
        },
        {
            id: 6,
            src: ChessGame,
            title: "Chess Game",
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;