import {Route, Routes} from "react-router-dom";
import "./routes_style.css";
import Home from "../Home/home";
import Login from "../Login/login";
import Register from "../Register/register";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import React, { useState } from "react";
import { getAuthToken } from "../../Components/Envs/envs";
  

const RoutesApp = () => {
    const IsLoggedContext = React.createContext([false, () => {}])
    const [isLogged, setIsLogged] = useState(getAuthToken() !== false)
    
  
    return (
        <body>
            <Header/>
            <div>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
            </Routes>
            </div>
            <footer>
                <Footer/>
            </footer>
        </body>


    );
  };
  
  export default RoutesApp;
  