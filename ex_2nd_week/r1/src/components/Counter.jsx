import { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClickAggiungi = () => {
        setCounter((_counter) => {
            return _counter + 1;
        })
    };

    const handleClickSottrai = () => {
        setCounter((_counter) => {
            return _counter - 1;
        })
    };

    const handleClickReset = () => {
        setCounter(0);
    };

    useEffect(() => {
            document.title = `${counter}`;
    }, [counter]);

    return (
        <>
            <div>
                <p>Count: {counter} </p>
            </div>
            <div><button onClick={handleClickAggiungi}>Aggiungi</button></div>
            <div><button onClick={handleClickSottrai}>Sottrai</button></div>
            <div><button onClick={handleClickReset}>Reset</button></div>
        </>
    );
}

export default Counter;