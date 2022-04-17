import Item from "./Item"

const arr = ["hhh",1,3]

const List = () => {
    return <div className="list">
        {/* {arr.map(e => <div>{e}</div>)} */}
        {
            arr.map(i => <Item />)
        }
        
    </div>
}

export default List