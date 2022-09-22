import React from "react";
import "./RelaxInfo.scss";
import { Accordion } from "../Accordion/Accordion";

export function RelaxInfo() {
    return (
        <div className="content">
            <div className="content__title h2">We will take care of everything,<br/>
                so you can get back to relaxing.
            </div>
            <div className="content__accordion">
                <Accordion
                    imgURL={"img/img5.svg"}
                    title="Anti-loss technology"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Accordion
                    imgURL={"img/img6.svg"}
                    title="Exchange easily"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Accordion
                    imgURL={"img/img7.svg"}
                    title="Fully encrypted"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Accordion
                    imgURL={"img/img8.svg"}
                    title="Plenty of options"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
            <img src="img/img9.svg" alt="Image" className="content__image"/>
        </div>
    );
}