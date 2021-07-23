import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <Helmet>
                <title>About - Jeff Bermejo</title>
            </Helmet>
            <section className="about helper__top">
                <h1 className="section__title ">Some things about me</h1>
                <div className="about__wrapper">
                    <div className="about__info">
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;Hi i'm <b>Jeff</b>,{" "}
                            <b>Front-end Web Developer</b> i specialise in
                            creating beautiful, usable, professional website
                            using best practice. all my works are lovingly hand
                            coded.
                        </p>
                        <p>
                        I enjoy my time creating websites specially on the front-end. I look forward into learning more.
                        </p>
                    </div>
                    <div className="about__skill">
                        <div className="skill__container">
                            <h3 className="skill__title">
                                Here are a few technologies I've been working
                                with recently:
                            </h3>
                            <h3>Languages</h3>
                            <div className="skill__wrapper">
                                <div className="skill">
                                    <i className="bx bxl-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className="skill">
                                    <i className="bx bxl-css3"></i>
                                    <p>CSS</p>
                                </div>
                                <div className="skill">
                                    <i className="bx bxl-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="skill">
                                    <i className="bx bxl-javascript"></i>
                                    <p>Javascript</p>
                                </div>
                            </div>
                        </div>
                        <div className="skill__container">
                            <h3>Libraries/Frameworks</h3>
                            <div className="skill__wrapper ">
                                <div className="skill skill2">
                                    <i className="bx bxl-react"></i>
                                    <p>React.js</p>
                                </div>
                                <div className="skill skill2">
                                    <i className="bx bxl-redux"></i>
                                    <p>Redux</p>
                                </div>
                                <div className="skill skill2">
                                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABaUlEQVRIS+2V4W3CQAyFXyYoG9ANygiwAZ0AOgFsUJgAmAC6ASN0BLpBR2g3QB/yVdHpcvFFUfMnlpAi4vPn9+yDSgNFNRBXI/jfnB+t9lg9kfQi6VkSzzdJX5J+PIdDTonVQDaStgasc4BeJO29DZSAKbxqUYX6N3Mhm+oFo3JnqlC3ljRtqMz7RQKOY3y+OecFHw1cnyPNHDJw3n/Y+6WNaN5lxikGys/OpWIEjOsRXsW52qi4SnrKJLF0jOov+gBTjNmhHktn1gRXjHli+WOuHjCH3+2u8sxs2ViUMbeiO5tyIqUYS4A2BdBXSZ/O2SbTYnDnZYmqY33WlRiMnSjGUoJGuEpNi8P8TjUoQM7zfTbqYH576TLulBljaxOcxeGacJ7lYoNp1g3OJQKnOH8OuWDxcKk1Sq5TsJHCsfpfU4lS18aXgIMKGsCBcM2wmt1wAUORLuBWGz0JI9jjUi85o9W92Ogpcgf4Zj4fsShVugAAAABJRU5ErkJggg=="/> */}
                                <i className='bx bxl-tailwind-css'></i>
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className="skill skill2">
                                    <i className="bx bxl-bootstrap"></i>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="skill__container">
                            <h3>Tools</h3>
                            <div className="skill__wrapper">
                                <div className="skill skill3">
                                    <i className="bx bxl-figma"></i>
                                    <p>Figma</p>
                                </div>
                                <div className="skill skill3">
                                    <i className="bx bxl-git"></i>
                                    <p>Git</p>
                                </div>
                                <div className="skill skill3">
                                    <i className="bx bxl-github"></i>
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default About;
