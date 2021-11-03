import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

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

    const sortedPost = useMemo(() => {
        console.log('SORT function in ACTION')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

    }
//      1:30:46
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
