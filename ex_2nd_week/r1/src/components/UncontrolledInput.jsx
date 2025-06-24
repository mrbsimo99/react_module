const UncontrolledInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);

        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first_name" />
                <input type="text" name="last_name" />
                <button type="submit">Invia</button>
            </form>
        </>
    )

}

export default UncontrolledInput;