import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/Login";

export default function RouteNav(){
    return(
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/login" Component={LoginScreen}/>
        </Routes>

    )
}

