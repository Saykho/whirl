import React from "react";
import "./Quality.scss";

export interface QualityProps {
    imgUrl?: string;
    title: string;
    description: string;
    type?: string;
}

export enum BackgroundColors {
    Yellow = "yellow",
    Aqua = "aqua",
    Pink = "pink",
}

export function Quality(props: QualityProps) {
    let className = "quality__card";

    switch (props.type) {
        case BackgroundColors.Yellow:
            className += " quality__card_yellow";
            break;
        case BackgroundColors.Aqua:
            className += " quality__card_aqua";
            break;
        case BackgroundColors.Pink:
            className += " quality__card_pink";
            break;
    }

    return (
        <div className={className}>
            {props.imgUrl ? <img src={props.imgUrl} alt="Img" className="card-img"/> :
                <div className="empty-img"></div>}
            <div className="card-title h4">{props.title}</div>
            <div className="card-description links">{props.description}</div>
        </div>
    );
}