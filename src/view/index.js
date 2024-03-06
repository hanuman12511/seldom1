import React  from "react"
import RouteNav from "./route"
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
const App=()=>{
    return(
        <>
        <BrowserRouter>
       <Header/>
       <RouteNav/>
       <div>Footer</div>
       </BrowserRouter>
        </>
    )
}

export default App