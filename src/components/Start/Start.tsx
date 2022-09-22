import React from "react";
import "./Start.scss";
import { Button, ButtonColor } from "../Button/Button";

export function Start() {
    return (
        <div className="start">
            <div className="start__title h2">Get started with Whirl</div>
            <div className="start__text description-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
            <Button color={ButtonColor.Default}>Book a demo</Button>
            <div className="start__terms typography-2">Free 30-day trial</div>
        </div>

    );
}