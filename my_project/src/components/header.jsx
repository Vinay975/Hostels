import React, { useState } from 'react';
import Carousel from './slick';
import '../Styles/header.css';

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

export default Header;
