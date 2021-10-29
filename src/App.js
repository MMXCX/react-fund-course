import React, {useState} from 'react';
// import Counter from './components/Counter'  ;
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "D Some 1 description"},
        {id: 2, title: "PHP8", body: "A Some 2 description"},
        {id: 3, title: "Ruby", body: "E Some 3 description"},
        {id: 4, title: "Pascal", body: "C Some 4 description"},
        {id: 5, title: "HTML", body: "B Some 5 description"}
    ]);

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    // 1:12:29
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder={'Find...'}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={'Sorting by'}
                    options={[
                        {value: 'title', name: 'Sort by Title'},
                        {value: 'body', name: 'Sort by Body'}
                    ]}
                    on
                />
            </div>
            {
                posts.length !== 0
                    ? <PostList posts={posts} title={"Post list."} remove={removePost}/>
                    : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
            }
        </div>
    );
}

export default App;
