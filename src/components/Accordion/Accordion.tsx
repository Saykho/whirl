import React, { useState } from "react";
import "./Accordion.scss";

export interface AccordionProps {
    imgURL: string;
    title: string;
    text: string;
}

export function Accordion(props: AccordionProps) {
    const [isOpen, setOpen] = useState<boolean>(true);

    let accordionClassName = "accordion-title h6";
    if (!isOpen) {
        accordionClassName += " closed";
    }
    return (
        <div className="accordion">
            <div className="accordion-headline">
                <img src={props.imgURL} alt="Img" className="accordion-img"/>
                <div className={accordionClassName}>{props.title}</div>
                <button className="accordion-button" onClick={() => setOpen((open) => !open)}>
                    <img src="img/open.svg" alt="Open"/>
                </button>
            </div>
            {isOpen && <div className="accordion-text typography-3">{props.text}</div>}
        </div>
    );
}