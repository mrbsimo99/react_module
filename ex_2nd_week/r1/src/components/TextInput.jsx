import { useState } from 'react'

const TextInput = () => {

    const [text, setText] = useState("")

    const handleInput = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <input type="text" value={text} placeholder="scrivi qualcosa" onInput={handleInput} />
                <p>{text}</p>
            </div>
        </>
    )

}

export default TextInput;