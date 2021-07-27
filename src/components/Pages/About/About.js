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
                        I'm open to learning, adapt to work with the team, freelance opportunities, contract jobs and use skills to solve complex UI challenges and provide value to the growth of an organization.
                        </p>
                    </div>
                    <div className="about__skill">
                        <div className="skill__container">
                            <h3 className="skill__title">
                                Here are a few technologies I've been working
                                with recently:
                            </h3>
                            <h4>Languages</h4>
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
                            <h4>Libraries/Frameworks</h4>
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
                                <img style={{width: "48px"}} src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className="skill skill2">
                                <img style={{height: "48px"}} src="https://images.ctfassets.net/qcrphhesuv4n/6cZj9wicrfq7gQwyYy7RcI/9ec870532475e09f72bb1c7143a4564b/1_p1TndLk3UsGPBsM7qHPZIw.png?w=294&h=175&q=50&fm=png" alt="" />
                                    <p>Styled-Components</p>
                                </div>
                                <div className="skill skill2">
                                    <i className="bx bxl-bootstrap"></i>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="skill__container">
                            <h4>Tools</h4>
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
                                <div className="skill skill3">
                                <img style={{width: "48px"}} src="https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-mark.png" alt="" />
                                    <p>Postman</p>
                                </div>
                                <div className="skill skill3">
                                <img style={{height: "48px", width: "48px"}} src="https://raw.githubusercontent.com/npm/logos/cc343d8c50139f645d165aedfe4d375240599fd1/npm%20logo/npm-logo-red.svg" alt="" />
                                    <p>npm</p>
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
