import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import Textarea from "./UI/textarea/Textarea";
import {useRef, useState} from "react";


function Form(props) {
    const [title, setTitle] = useState("");
    const bodyInputRef = useRef()
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <form>
            <div>
                <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                   placeholder="заголовок"
                />
            </div>
            <div>
                {/*<textarea ref={bodyInputRef} type="text"/>*/}
                <Textarea
                    ref={bodyInputRef}
                    type="text"
                    placeholder="описане"
                />
            </div>
            <div>
                <Button
                    onClick={addNewPost}
                > Добавить текст
                </Button>
            </div>
        </form>
    );
}

export default Form;