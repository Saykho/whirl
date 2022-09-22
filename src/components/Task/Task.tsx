import React from "react";
import "./Task.scss";
import { Quality } from "../Quality/Quality";

export function Task() {
    return (
        <div className="task">
            <div className="task__description">
                <div className="task-title h2">Your tasks, automated.</div>
                <div className="task-desc description-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod <br/> tempor incididunt ut labore
                    et dolore magna aliqua.
                </div>
            </div>
            <div className="task__options">
                <Quality
                    imgUrl={"img/img1.svg"}
                    title="Learn your options."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
                <Quality
                    imgUrl={"img/img2.svg"}
                    title="Stay informed."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro."/>
                <Quality
                    imgUrl={"img/img3.svg"}
                    title="Automate it all."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum."/>
                <Quality
                    imgUrl={"img/img4.svg"}
                    title="Stay informed."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur."/>
            </div>
        </div>
    );
}