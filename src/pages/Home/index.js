import { useState } from "react"

import Edit from "./components/Edit"
import List from "./components/List"
import "./index.css"

const Home = () => {
    // const [a, setA] = useState(100) // let a = 100;
    const [data, setData] = useState([])

//     function plus(){
//         // setA(a+100);
//         // console.log("one");
//         // setA(a+100);
//         // console.log("two");
// //-----------------
//         setA(function(pres) {
//             return pres+100
//         })
//         console.log("one");
//         setA(function(pres) {
//             return pres+100
//         })
//         console.log("two");
//     }

    return <div className="app">
        {/* {a}
        <button onClick={plus}> add </button> */}

        <Edit add={setData} /> 
        <List listData={data} />
    </div>
}

export default Home