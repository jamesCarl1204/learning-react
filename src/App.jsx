import List from './List.jsx'

function App() {
   
   const fruits = [
          {id:1,name:'apple',cal:1},
          {id:2,name:'orange', cal:234}, 
          {id:3,name:'banana',cal:343}];

   const vegetables = [
          {id:4,name:'okra',cal:1434},
          {id:8,name:'potatoes', cal:234}, 
          {id:9,name:'brocoli',cal:343}]

          return(
            <>
          {fruits.length > 0 ? <List items={fruits} category="fruits"/> : null}
          <List items={vegetables} category="vegetables"/>
          </>)
}


export default App