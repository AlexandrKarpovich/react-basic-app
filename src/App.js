import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('fdfd')
  console.log(value)
  console.log(setValue)
  
  // let likes = 0;
  return (
    <>
      <div style={{fontSize: 30}}>{likes}</div>
      <button onClick={ () => setLikes(likes + 1) }>Click +</button>
      <button onClick={ () => setLikes(likes - 1) }>Click -</button>

      <h3>{value}</h3>
      <input 
        type='text' 
        value={value}
        onChange={e => setValue(e.target.value)} />
    </>
  );
}

export default App;
