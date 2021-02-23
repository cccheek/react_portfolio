import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand name">Claire Cheek</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="about">About<span
                        className="sr-only">(current)</span></a>
                    <a className="nav-link" href="portfolio">Portfolio</a>
                    <a className="nav-link" href="contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;