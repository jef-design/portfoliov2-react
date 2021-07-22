import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <React.Fragment>
            <Helmet>
                <title>Jeff Bermejo | Front-end Developer</title>
            </Helmet>
            <header className="header container">
                <div className="header__wrapper">
                <i className='bx bx-menu' onClick={()=> setIsOpen(!isOpen)}></i>
                    <div className="header__title">
                        <Link to="/" onClick={()=> setIsOpen(!isOpen)}><p>JEFF</p></Link>
                    </div>
                    <ul className="nav__menu" style={{display: isOpen ? "flex" : ""}}>
                        <li>
                            <Link to="/project" onClick={()=> setIsOpen(!isOpen)}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={()=> setIsOpen(!isOpen)}>About & Skill</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__social">
                <Link href="https://github.com/jef-design"><i className='bx bxl-github'></i></Link>
                <Link href="https://www.linkedin.com/in/jeff-bermejo-b14288217/"><i className='bx bxl-linkedin' ></i></Link>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
