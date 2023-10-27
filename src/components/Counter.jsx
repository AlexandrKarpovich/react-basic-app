import {useState} from "react";

const Counter = () => {
    const [likes, setLikes] = useState(0)
    return (
        <>
            <div style={{fontSize: 30}}>{likes}</div>
            <button onClick={ () => setLikes(likes + 1) }>Click +</button>
            <button onClick={ () => setLikes(likes - 1) }>Click -</button>
        </>
    );
};

export default Counter;