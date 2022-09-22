import React from "react";
import "./Posts.scss";
import { Post } from "../Post/Post";
import { Button, ButtonColor } from "../Button/Button";

export function Posts() {
    return (
        <div className="posts">
            <div className="posts__top">
                <div className="posts-title h2">Get smarter, with our blog.</div>
                <Button color={ButtonColor.Light} isOutline={true}>See All Posts</Button>
            </div>
            <div className="posts__post">
                <Post
                    imgURL={"img/post1.svg"}
                    category="Improvements"
                    name="Automating Daily Tasks from Your Phone"
                    description="Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab."/>
                <Post
                    imgURL={"img/post2.svg"}
                    category="Tips & Tricks"
                    name="Can You Automate Group Learning?"
                    description="Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab."/>
                <Post
                    imgURL={"img/post3.svg"}
                    category="News"
                    name="Our $3,000,000 B Round Investors"
                    description="Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus."/>
            </div>
        </div>
    );
}