import React, {useState} from 'react';
// import Counter from './components/Counter'  ;
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Some 1 description"},
        {id: 2, title: "PHP8", body: "Some 2 description"},
        {id: 3, title: "Ruby", body: "Some 3 description"},
        {id: 4, title: "Pascal", body: "Some 4 description"},
        {id: 5, title: "HTML", body: "Some 5 description"}
    ]);

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (
        <div className="App">
            <form>
                {/* Управляемый Компонент */}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Title"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Description"
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title={"Post list."}/>
        </div>
    );
}

export default App;
