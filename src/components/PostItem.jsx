import React from 'react';
import MyButton from './UI/button/MyButton';
import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    View
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
