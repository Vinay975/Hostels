import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import { FaHome } from "react-icons/fa";
import "../../../src/components/addYourHome/addurhomeCSS/finalsubmit.css";
import animationData from "../../../public/originalthankyou.json";
import smile from "../../../public/animationsmile.json";

const FinalSubmit = () => {
    const navigate = useNavigate();

    const options = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const secondAnimation = {
        loop: false,
        autoplay: true,
        animationData: smile,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="final-submit-container">
            <div className="top-bar">
                <div className="logo-box">Logo</div>
            </div>

            <div className="final-submit-full-container">
                <div className="final-submit-first-box">
                    <div className="sub-one">
                        <Lottie options={options} 
                                style={{ width: '400px', height: '200px' }} 
                        />
                    </div>
                    <div className="sub-two">
                        You’re all set. You’ll receive an email with details on attending the webinar. We look forward to seeing you there!
                    </div>
                    <div
                        className="final-submit-button"
                        onClick={() => navigate("/")}
                    >
                        <FaHome className="home-icon" />
                        <span>Go to Home</span>
                    </div>
                </div>

                <div className="final-submit-second-box">
                    <Lottie options={secondAnimation} 
                            style={{ width: '400px', height: '380px' }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default FinalSubmit;
