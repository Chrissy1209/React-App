import Edit from "./components/Edit"
import List from "./components/List"
import Item from "./components/Item"
import "./index.css"


// const app = {
//     color: "red"
// } <div style={app}>

const Home = () => {
    return <div className="app">
        <Edit /> 
        <List />
    </div>
}

export default Home