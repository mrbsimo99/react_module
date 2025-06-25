import { useRef } from 'react';

const UncontrolledInput = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);

        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} name="first_name" placeholder='Inserire nome' />
                <button type="submit" onClick={handleClick}>Invia</button>
            </form>
        </>
    )

}

export default UncontrolledInput;