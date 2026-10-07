import React, {useState} from 'react'

function MyComponent() {

    let [name, setName] = useState("guest");

    let [payment, setPayment] = useState("")
    
    let [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

   
    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
        <button onClick={setName}>set name</button>

        

        <select value={payment} onChange={setPayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Gcash">Gcash</option>
          <option value="giftCard">giftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}
                    />
                    Pick Up
        </label><br/>
        <label>
            <input type="radio" value="Delivery"
                   checked={shipping=== "Delivery"}
                   onChange={handleShippingChange}/>
                   Delivery
        </label>
        <p>shipping: {shipping}</p>
    </div>)
}

export default MyComponent