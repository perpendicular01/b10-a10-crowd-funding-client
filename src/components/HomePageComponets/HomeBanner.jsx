import React, { useEffect } from 'react';
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";

import slider1 from '../../assets/banner1.avif';
import slider2 from '../../assets/banner2.avif';
import slider3 from '../../assets/banner3.avif';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation should happen only once
    });
  }, []);

  const slides = [
    {
      id: "slide1",
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%), url(${slider1})`,
      title: "Small Contributions, Big Impact",
      subtitle: "Empower communities, back innovative ideas, and support causes that inspire you. Start funding the future today!",
      buttonText: "Explore Campaigns",
    },
    {
      id: "slide2",
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url(${slider2})`,
      title: "Support What Matters to You",
      subtitle: "Browse campaigns, fund meaningful projects, and be part of real change. Together, let’s make an impact!",
      buttonText: "Explore Campaigns",
    },
    {
      id: "slide3",
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url(${slider3})`,
      title: "Fuel Dreams, Fund Innovation",
      subtitle: "Join hands to bring creative ideas, startups, and personal causes to life. Together, we can make a difference!",
      buttonText: "Explore Campaigns",
    },
  ];

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
          style={{
            background: slide.background,
            backgroundSize: "cover", // Ensures the image covers the container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        >
          <div className="w-[90%] mx-auto py-6 lg:py-0">
            <div className="w-[85%] pl-20 py-12 lg:py-24">
            <h3
                data-aos="zoom-out"
                className="text-white pt-5 font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl max-[80%]"
              >
                <Typewriter
            words={[`${slide.title}`]}
            loop={5}
            cursor
            
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={2000}
            
            />
                
              </h3>
              
              <p
                data-aos="fade-down-right"
                className="text-white pt-3 md:pt-5 pb-5 opacity-60 text-sm md:text-lg md:inline-block max-w-[600px] mx-auto font-Roboto"
              >
                {slide.subtitle}
              </p>
              
              <Link to='/allCampaigns'> <button className="text-black bg-[#F2EEE0] text-sm md:text-lg  rounded-xl py-1 md:py-2 px-3 md:px-4  flex items-center gap-1">
                 <MdOutlineExplore />  {slide.buttonText}
              </button> </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
