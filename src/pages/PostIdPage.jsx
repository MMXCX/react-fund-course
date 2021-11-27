import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchCommentsById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id).then(() => {
        })
        fetchCommentsById(params.id).then(() => {
        })
    }, [])
    return (
        <div>
            <h1>Post page ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments:</h1>
            {isComLoading
                ? <Loader/>
                : comments.map((com, key) =>
                    <div key={key} style={{marginTop: 25}}>
                        <ul>
                            <li><h4>E-mail - {com.email}</h4></li>
                            <li>Name - {com.name}</li>
                            <li>Body - {com.body}</li>
                        </ul>
                    </div>)
            }
        </div>
    );
};

export default PostIdPage;
