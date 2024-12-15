import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/header.css';

// Header Component
const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            <div className="block-1-header">
                <div className="block-1-logo"></div>
                <div className="block-1-button">HOME</div>
                <div className="block-1-button">MENU</div>
                <div className="block-1-button">BRAND</div>
                <div className="block-1-button">HELP</div>

                <div className="block-1-button1" onClick={toggleDropdown}>
                    |||
                    {isDropdownVisible && (
                        <div className="block-1-child">
                            <div>PRODUCT</div>
                            <div>BRAND</div>
                            <div>INSPIRATION</div>
                            <div>SUPPORT</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

// Carousel Component
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false, 
    };
    const slides = [
        { src: "../public/hostel-1.avif", alt: "Slide 1" },
        { src: "../public/hostel-2.webp", alt: "Slide 2" },
        { src:  "../public/hostel-3.avif", alt: "Slide 3" },
    ];

    return (
        <div style={{ width: "100%", height: "auto", margin: "0 auto"}}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Export both components
export { Header, Carousel };
