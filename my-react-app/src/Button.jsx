

function Button() {

    const handleClick = () => console.log('yay')

    const handleClick2 = (name) => console.log(`${name}`)

    return (<button onClick={handleClick2}>Click me</button>)
}


export default Button