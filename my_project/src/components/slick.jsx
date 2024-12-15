import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "../Styles/carousel.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        { src: "/images/slide1.jpg", alt: "Slide 1" },
        { src: "/images/slide2.jpg", alt: "Slide 2" },
        { src: "/images/slide3.jpg", alt: "Slide 3" },
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
