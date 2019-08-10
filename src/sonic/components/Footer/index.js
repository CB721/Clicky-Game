import React from "react";
import "./style.css";

function Footer() {
    return <footer className="footer">
        <div className="bottom">
            Sonic Says!
    </div>
        <div className="gameSwitch">
            <a href="/mario">
                <img id="logo" src="https://www.pngkey.com/png/full/16-163337_mario-logo.png" alt="mario logo"></img>
            </a>
        </div>
        <span>Copyright &copy; 2019 Clint Brodar</span>
    </footer>
}

export default Footer;
