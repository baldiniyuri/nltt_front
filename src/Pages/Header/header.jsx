import "./header_style.css";
import React from "react";
import logo from './IMG/logo.svg';
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
        <header className="header-container">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={()=> navigate("/register")}>Cadastro</button>
            <button onClick={()=> navigate("/login")}>Login</button>
            <button onClick={()=> navigate("/images")}>Imagens</button>
        </header>
  );
};

export default Header;
