import React from "react";
import "./AboutWhirl.scss";
import { Quality } from "../Quality/Quality";

export function AboutWhirl() {
    return (
        <div className="about-whirl">
            <div className="about-whirl__title h2">What's Whirl all about?</div>
            <Quality
                title="All on one place."
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            <Quality
                imgUrl={"img/glass.svg"}
                title="Get daily alerts."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
            <Quality
                imgUrl={"img/secure.svg"}
                title="Safe and secure."
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

        </div>
    );
}