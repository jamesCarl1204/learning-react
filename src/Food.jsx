
function Food() {

    const food1 = 'orange';
    const food2 = 'apple'
    return(
        <ul>
            <li>banana</li>
             <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food