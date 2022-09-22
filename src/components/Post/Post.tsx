import React from "react";
import "./Post.scss";

export interface PostProps {
    imgURL: string;
    category: string;
    name: string;
    description: string;
}

export function Post(props: PostProps) {
    return (
        <div className="post-card">
            <img src={props.imgURL} alt="Image" className="post-image"/>
            <div className="post-text">
                <div className="post-category typography">{props.category}</div>
                <div className="post-title h4">{props.name}</div>
                <div className="post-desc text">{props.description}</div>
                <div className="post-date text-2">April 24, 2022</div>
            </div>
        </div>
    );
}