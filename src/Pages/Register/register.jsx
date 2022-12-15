import "./register_style.css";
import { useState, useEffect } from "react";
import {LoginAndRegisterField} from "../../Components/Inputs/register_login";
import { useDispatch } from "react-redux";
import {RegisterUser} from "./Components/register_requisitions";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../Components/Envs/envs";


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const InputFieldFunctions = [setEmail, setPassword]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserData = {
    email: email,
    password: password
  }

  const handleForm = () => {
    let data = {dispatch, UserData, setError, setLoading}
    RegisterUser(data)
  }

  useEffect(() => {
    let userId = getUserId()

    if(!loading && userId !== 0) {
      navigate("/login")
    } 
  }, [loading])


  return (
    <div className="register-container">
        <h2>Cadastro</h2>
        <span>
          {LoginAndRegisterField.map(({type, placeholder, id},index) => <input key={index} type={type} placeholder={placeholder} id={id} onChange={(e) => InputFieldFunctions[index](e.target.value)}/>)}
          <button onClick={() => handleForm()}>Cadastrar</button>
        </span>
    </div>
  );
};

export default Register;