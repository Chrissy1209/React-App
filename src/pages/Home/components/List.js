import Item from "./Item"

const arr = ["hhh",1,3]

const List = ({ listData }) => {
    return <div className="list">
        {
            listData.map(e => <Item key = {e} />) /* 效能問題：key不能塞index  */
        }
    </div>
}

export default List