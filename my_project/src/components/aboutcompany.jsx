import React from "react";
import "../Styles/Company.css";

const Company = () => {
    return (
        <div className="main">
            <div className="leftblock">
                <img
                    src="https://i.pinimg.com/originals/84/f1/b3/84f1b32e6257f6362be14a0a0965b865.jpg"
                    alt="error"
                />
            </div>
            <div className="rightblock">
                <div className="right-1">
                    <div className="heading">ABOUT OUR COMPANY</div>
                </div>
                <div className="right-2">
                    <div className="para">
                        A tale of a fateful trip that started from this tropic port aboard this
                        tiny ship today still wanted by the government they survive as
                        soldiers of fortune to a deluxe apartment in the sky moving on up to
                        the east side a family.
                        <br />
                        <br />
                        The government they survive as soldiers of fortune baby if you've
                        ever wondered the east side to a deluxe apartment.
                    </div>
                </div>
                <div className="right-3">
                    <div className="bottom-1">
                        <div className="one">
                            <div>
                                <img
                                    src="https://www.clipartbest.com/cliparts/7ca/LRr/7caLRrRpi.png"
                                    alt="vision"
                                    height="100px"
                                    width="100px"
                                />
                            </div>
                            <div>Vision</div>
                        </div>
                    </div>
                    <div className="bottom-2">
                        <div className="two">
                            <div>
                                <img
                                    src="/misson.png"
                                    alt="mission"
                                    style={{ height: "200px", width: "200px" }}
                                />

                            </div>
                            <div>Mission</div>
                        </div>
                    </div>
                    <div className="bottom-3">
                        <div className="three">
                            <div>
                                <img
                                    src="/target.png"
                                    alt="goals"
                                    height="100px"
                                    width="100px"
                                />
                            </div>
                            <div>Goal</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
