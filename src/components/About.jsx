import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Hello!! My name is Ritam Pal and I am 20 years old, currently pursuing B.Tech in Computer Science with specialization in Software Engineering from SRM IST, KTR. I love to Code and keep working towards my dream of becoming a Software Engineer. The following slides tell about me more.

                </p>

                <br />

                <p className="text-xl">

                </p>
            </div>
        </div>
    );
};

export default About;