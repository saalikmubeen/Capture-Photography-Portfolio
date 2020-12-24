import React from 'react';
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";


const Services = () => {
    return (
        <div className="services">
            <h2>High <span>quality</span> services</h2>

            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img alt="icon" src={clock} />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img alt="icon" src={teamwork} />
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img alt="icon" src={diaphragm} />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img alt="icon" src={money} />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="services-image">
                <img src={home2} alt="camera"/>
            </div>
        </div>
    )
}


export default Services;