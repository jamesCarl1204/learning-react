import {useState} from 'react'
import './styles.css'
export default function RandomColor() {

    const [currentColor, generateColor] = useState('#125101')


    let str = '0123456789ABCDEF'
    let colorVal = ''

    function handleColor(){
       
        for(let i = 0; i < 6; i++) {
        let nums = Math.floor(Math.random() * str.length - 1) + 1
        colorVal += str[nums]
        //generateColor(`#${color}`)
    }
         generateColor(`#${colorVal}`)
    }

    
    return(
        <div className="wrapper" >
            <div className="color" style={{backgroundColor:currentColor}}>

            </div>
            <button onClick={() => handleColor() }>GENERATE COLOR</button>
        </div>
    )
}

