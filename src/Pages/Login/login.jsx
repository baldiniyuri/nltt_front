import "./login_style.css";
import { useState, useEffect } from "react";
import {LoginAndRegisterField} from "../../Components/Inputs/register_login";
import { LoginUser } from "./Components/login_requisitions";
import { useDispatch } from "react-redux";
import {getUserId} from "../../Components/Envs/envs";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const InputFieldFunctions = [setEmail, setPassword]
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const UserData = {
    email: email,
    password: password
  }

  const handleForm = () => {
    let data = {dispatch, UserData, setError, setLoading}
    LoginUser(data)
  }
  useEffect(() => {
    let userId = getUserId()

    if(!loading && userId !== 0) {
      navigate("/images")
    } 
  }, [loading])


  return (
    <div className="login-container">
        <h2>Logar</h2>
        <span>
          {LoginAndRegisterField.map(({type, placeholder, id},index) => <input key={index} type={type} placeholder={placeholder} id={id} onChange={(e) => InputFieldFunctions[index](e.target.value)}/>)}
          <button onClick={()=> handleForm()}>Logar</button>
        </span>
    </div>
  );
};

export default Login;
