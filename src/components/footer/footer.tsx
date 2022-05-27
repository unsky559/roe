import * as React from "react";
import "./footer.scss";
// @ts-ignore
import img from "/src/public/media/logo/goog-purple.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <img src={img} alt=""/>
            </div>
        </footer>
    );
};

export default Footer;
