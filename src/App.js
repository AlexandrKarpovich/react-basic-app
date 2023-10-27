import { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

import "./styles/App.css";
import PostList from "./components/PostList";
import Form from "./components/Form";

function App() {
    const [post, setPost] = useState([
        { id: 1, title: 'Javascript', body: 'Description'},
        { id: 2, title: 'php', body: 'Description'},
        { id: 3, title: 'golang', body: 'Description'},
        { id: 4, title: 'node js', body: 'Description'},
        { id: 5, title: 'python', body: 'Description'},
        { id: 6, title: 'java', body: 'Description'},
    ]);

    const [text, setText] = useState([
        { id: 32, title: 'белеберда', body: 'описанипе 1'},
        { id: 2, title: 'ffffff', body: 'описанипе 6'},
        { id: 5, title: 'aaaaaaa', body: 'описанипе 9595'},
    ])
  
  // let likes = 0;
  return (
    <div className="App">
        <Form />
        <PostList posts={post} title={'Список постов'}/>
        <PostList posts={text} title={'Текста'}/>

        {/*<h2>functional component</h2>*/}
        {/*<Counter  />*/}
        {/*<h2>constructor component</h2>*/}
        {/*<ClassCounter />*/}
        {/*<Input />*/}
    </div>
  );
}

export default App;
