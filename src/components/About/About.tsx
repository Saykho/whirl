import React from "react";
import "./About.scss";
import { Button, ButtonColor } from "../Button/Button";

export function About() {
    return (
        <div className="about">
            <div className="about__right">
                <div className="about-title h1">Your everyday <br/> tasks, automated.</div>
                <div className="about-description description">Whirl lets you design and streamline <br/> your everyday
                    tasks and workflows<br/> in just a few clicks.
                </div>
                <div className="about-buttons">
                    <Button color={ButtonColor.Default} isOutline={false}>Book a demo</Button>
                    <Button color={ButtonColor.Light} isOutline={true}>Learn more &gt;</Button>
                </div>
            </div>
            <img src="img/image.svg" className="about__img"/>
        </div>
    );
}