import React, {useState} from 'react'

function MyComponent() {

    let [name, setName] = useState();
    
    const updateName = () => {
        setName("carl")
        console.log(name)
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>set name</button>
    </div>)
}

export default MyComponent