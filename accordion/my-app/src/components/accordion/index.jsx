import data from './data'
import {useState} from 'react'
import './styles.css'


export default function Accordian() {
    const [selected, setSelected ] =  useState(null)

    function handleSingleSelection(getCurrentID) {
        setSelected(getCurrentID)
        
    }

    return <div className="wrapper">
        <div className="accordian">
           {
           data && data.length > 0 ? 
           data.map(dataItems => <div className="item">
             <div onClick={() => handleSingleSelection(dataItems.id)} className="title">
                <h3>{dataItems.question}</h3>
                <span>+</span>
                </div>
                {
                    selected === dataItems.id ? 
                    <div className="content">{dataItems.answer}</div>
                    : null
                }
           </div>)
           : <div>No data found</div>
}
        </div>
    </div>
}