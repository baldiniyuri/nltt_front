import "./register_style.css";
import { useState } from "react";
import {LoginAndRegisterField} from "../../Components/Inputs/register_login";


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const InputFieldFunctions = [setEmail, setPassword]


  return (
    <div className="register-container">
        <h2>Cadastro</h2>
        <span>
          {LoginAndRegisterField.map(({type, placeholder, id},index) => <input key={index} type={type} placeholder={placeholder} id={id} onChange={(e) => InputFieldFunctions[index](e.target.value)}/>)}
          <button>Cadastrar</button>
        </span>
    </div>
  );
};

export default Register;