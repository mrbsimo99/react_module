
const ItemList = ({ array }) => {


    return (
        <>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ItemList;