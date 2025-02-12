import React from "react";
// Import your images
import Mission1 from "../../assets/mission1.png";
import Mission2 from "../../assets/mission2.jpeg";
import Mission3 from "../../assets/mission3.jpeg";
import { Typewriter } from "react-simple-typewriter";

const HomeMission = () => {
    const missions = [
        {
            title: "Empowering Communities",
            description:
                "We believe in empowering communities by providing the necessary tools, resources, and support that help individuals unlock their potential. Our goal is to create sustainable opportunities that promote personal growth, development, and stronger connections within the community.",
            image: Mission1,
        },
        {
            title: "Innovating for a Better Future",
            description:
                "We are committed to using innovation to solve the most pressing challenges of today and tomorrow. Through cutting-edge solutions and sustainable practices, we aim to create lasting change that will benefit future generations and build a better, more inclusive world.",
            image: Mission2,
        },
        {
            title: "Championing Inclusivity",
            description:
                "We are dedicated to breaking down barriers and ensuring that everyone has a seat at the table. Our mission is to foster an environment where diversity is celebrated, and every individual’s voice is heard, valued, and given equal opportunities to succeed.",
            image: Mission3,
        },
    ];

    return (
        <section className=" w-[95%] md:w-[70%] lg:w-[60%] mx-auto py-12 ">
            <h2 className="text-red-950  dark:text-white  mx-auto text-center text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
                Our Mission
            </h2>
            
            <div className=" space-y-8">
                
                {missions.map((mission, index) => (
                    <div
                        key={index}
                        className={`flex flex-col  md:flex-row ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                        } items-center md:items-start space-y-6 md:space-y-0 md:space-x-12  lg:space-x-20`}
                    >
                        <img
                            src={mission.image}
                            alt={mission.title}
                            className="sm:w-[65%] md:w-[35%] object-cover rounded-md"
                        />
                        <div className="sm:w-[85%] md:w-[65%] text-center md:text-left space-y-2 lg:pt-10">
                            <h3 className="text-xl lg:text-2xl font-bold dark:text-gray-200">{mission.title}</h3>
                            <p className="w-[95%] lg:w-[90%] text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">{mission.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeMission;
