import React from 'react';
import '../Styles/service.css';

const Services = () => {
    return (
        <div className="service_services">
            <div className="service_heading">
                <div className="service_service-1">
                    OUR SERVICES
                </div>
            </div>
            <div className="service_matter">
                A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers
            </div>
            <div className="service_boxes">
                <div className="service_main_box">
                    {/* All 6 boxes in a single div */}
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Business Services</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Consumer Product</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Financial Services</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Travel and Aviation</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Software Research</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_image"></div>
                        <div className="service_data">
                            <strong>Quality Resourcing</strong><br />
                            The tiny ship today stiller<br /><br />
                            <a className="service_a" href="http://">READ MORE&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_last">
                You can also send us an email and we’ll get in touch shortly, or Call us<br />
                info@support.com (or) +1 234 6780 900
            </div>
        </div>
    );
};

export default Services;
