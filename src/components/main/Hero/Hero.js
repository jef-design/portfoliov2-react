import React from "react";
import Fade from 'react-reveal/Fade';

function Hero() {
    return (
        <div className="hero">
            <Fade top>
            <div>
                <h2 className="hero__bigheader">
                    Hi there i'm <span className="hero__span">Jeff</span>
                </h2>
            </div>
            <div>
                <h2 className="hero__bigheader">
                    I <span className="hero__span">build</span> things for the <span className="hero__span">Web.</span>
                </h2>
            </div>
            </Fade>
           <Fade bottom>
           <div className="hero__cta">
           <h3>Get in touch
           <i className='bx bx-mail-send' ></i>
           <a href="mailto:bermejojff97@gmail.com">BermejoJeffrey@gmail.com</a>
           </h3>
           </div>
           </Fade>
        </div>
    );
}

export default Hero;
