import React, { ReactNode } from "react";
import "./Button.scss";

export enum ButtonColor {
    Default = "default",
    Light = "light"
}

export interface ButtonProps {
    color: ButtonColor;
    isOutline?: boolean;
    children: ReactNode;
}

export function Button(props: ButtonProps) {
    let className = `links button ${props.color}`;
    if (props.isOutline) {
        className += " outline";
    }
    return (
        <div className={className}>{props.children}</div>
    );
}
