import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from "./hooks/usePosts";
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "D Some 1 description"},
        {id: 2, title: "PHP8", body: "A Some 2 description"},
        {id: 3, title: "Ruby", body: "E Some 3 description"},
        {id: 4, title: "Pascal", body: "C Some 4 description"},
        {id: 5, title: "HTML", body: "B Some 5 description"}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)



    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }
//1:43:34
    useEffect(() => {
        fetchPosts()
    }, [filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create USER
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <PostFilter
                    filter={filter}
                    setFiler={setFilter}
                />
            </div>
            <PostList posts={sortedAndSearchedPosts} title={"Post list."} remove={removePost}/>
        </div>
    );
}

export default App;
