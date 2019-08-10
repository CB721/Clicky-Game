import React from "react";
import "./style.css";

function Footer() {
    return <footer className="footer">
        <div className="bottom">
            Mario Memory!
    </div>
        <div className="gameSwitch">
            <a href="/sonic">
                <img src="https://1000logos.net/wp-content/uploads/2017/10/sonic-logo-768x576.png" alt="sonic logo"></img>
            </a>
        </div>
        <span>Copyright &copy; 2019 Clint Brodar</span>
    </footer>
}

export default Footer;
