import React from "react";
import "./TrackInfo.scss";
import { Button, ButtonColor } from "../Button/Button";

export function TrackInfo() {
    return (
        <div className="reminder">
            <img src="img/img.svg" alt="Reminder" className="reminder__img"/>
            <div className="reminder__description">
                <div className="reminder-title h2">Set, forget, and then <br/> track.</div>
                <div className="reminder-desc description-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, <br/> sed do eiusmod
                    tempor incididunt ut labore et dolore <br/> magna aliqua.
                </div>
                <ul className="reminder-list list">
                    <li>✓ Understand your options</li>
                    <li>✓ No lock-ins</li>
                    <li>✓ You own the shares</li>
                </ul>
                <Button color={ButtonColor.Default}>Book a Demo</Button>
            </div>
        </div>
    );
}