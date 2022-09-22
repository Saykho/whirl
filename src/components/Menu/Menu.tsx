import React from "react";
import "./Menu.scss";
import { Button, ButtonColor } from "../Button/Button";

export function Menu() {
    return (
        <nav className="nav">
            <div className="nav__links">
                <img src="img/logo.svg" alt="Logo" className="nav-logo"/>
                <ul className="nav-links links">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Learn</a></li>
                </ul>
            </div>
            <div className="nav__buttons">
                <Button color={ButtonColor.Light} isOutline={true}>Sign in</Button>
                <Button color={ButtonColor.Default} isOutline={false}>Book a demo</Button>
            </div>
        </nav>
    );
}