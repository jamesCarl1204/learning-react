import  PropTypes  from 'prop-types'

function List(props) {
    const category = props.category;
   const itemList = props.items;
   

   const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.cal}</b></li>)
    //fruits.sort((a,b) => a.name.localeCompare(b.name))
   //  const lowcalFruits = fruits.filter(fruit => fruit.cal < 100)

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-category">{listItems}</ul>
        </>
)

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        cal: PropTypes.number
    }))
}

export default List