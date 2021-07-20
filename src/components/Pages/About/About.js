import React from "react";
import { Helmet } from "react-helmet";

function About() {
    return (
        <React.Fragment>
            <Helmet>
                <title>About - Jeff Bermejo</title>
            </Helmet>
            <section className="about section__title helper__top">
                <h1>Some things about me</h1>
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam corrupti rem possimus excepturi maiores quos fugit architecto totam perferendis, ex alias, aliquam ab, recusandae quia.
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
                                    <i class="bx bxl-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className="skill">
                                    <i class="bx bxl-css3"></i>
                                    <p>CSS</p>
                                </div>
                                <div className="skill">
                                    <i class="bx bxl-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="skill">
                                    <i class="bx bxl-javascript"></i>
                                    <p>Javascript</p>
                                </div>
                            </div>
                        </div>
                        <div className="skill__container">
                            <h3>Libraries/Frameworks</h3>
                            <div className="skill__wrapper ">
                                <div className="skill skill2">
                                    <i class="bx bxl-react"></i>
                                    <p>React.js</p>
                                </div>
                                <div className="skill skill2">
                                    <i class="bx bxl-bootstrap"></i>
                                    <p>Bootstrap</p>
                                </div>
                                <div className="skill skill2">
                                    <i class="bx bxl-redux"></i>
                                    <p>Redux</p>
                                </div>
                            </div>
                        </div>
                        <div className="skill__container">
                            <h3>Tools</h3>
                            <div className="skill__wrapper">
                                <div className="skill skill3">
                                    <i class="bx bxl-figma"></i>
                                    <p>Figma</p>
                                </div>
                                <div className="skill skill3">
                                    <i class="bx bxl-git"></i>
                                    <p>Git</p>
                                </div>
                                <div className="skill skill3">
                                    <i class="bx bxl-github"></i>
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
