 import {useState} from 'react'
 import data from './data'
 import './styles.css'


  function Accordian(){

    const [selected, setSelected] = useState(null)

    function handleSingleSelection(id) {
        setSelected(id)
    }

    
       return <div className="wrapper">
            <div className="accordian">
        
                {
                    data.length > 0 ?
                    data.map((dataItems) => 
                        <div className="item" onClick={() => handleSingleSelection(dataItems.id)}>
                           <div className="content"> 
                            {dataItems.question}
                            <span>+</span> 
                            </div>
                             {selected === dataItems.id ?
                            dataItems.answer :
                            <div></div>}
                        </div>
                    )
                    : <div></div>
                }
            </div>
        </div>
 }

 
 export default Accordian