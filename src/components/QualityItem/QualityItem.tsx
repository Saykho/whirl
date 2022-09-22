import React from "react";
import "./QualityItem.scss";
import { BackgroundColors, Quality } from "../Quality/Quality";

export function QualityItem() {
    return (
        <div className="quality">
            <Quality
                imgUrl={"img/fast.svg"}
                title="Fast. Really fast."
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                type={BackgroundColors.Yellow}/>

            <Quality
                imgUrl={"img/money.svg"}
                title="More bang for buck."
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                type={BackgroundColors.Aqua}/>

            <Quality
                imgUrl={"img/safe.svg"}
                title="Safe and secure."
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                type={BackgroundColors.Pink}/>

        </div>
    );
}