import "./image_style.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {postImage} from "./Components/image_requisitions";
import { getUserId } from "../../Components/Envs/envs";
import { useNavigate } from "react-router-dom";


const Image = () => {
  const [photo, setPhoto] = useState(null)
  const [uploadImage, setUploadImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (uploadImage) {
          setPhoto(URL.createObjectURL(uploadImage))
    }
  }, [uploadImage])

  useEffect(() => {
    let userId = getUserId()
    if (!userId) {
          alert('Você deve estar logado para usar esse aplicativo.')
          navigate('/')
    }
  }, [])


  const handleSubmit = () => {
    let userData = {image: uploadImage}
    let data = {dispatch, userData, setError, setLoading}
    postImage(data)
  }

  
  return (
    <div className="image-container">
      <h2>Redimencionar Imagens</h2>
      <img
            id="user_image"
            src={photo ? photo : null}
            alt={photo ? "Imagem" : ''}
          />
      <span>
      <input type="file" id="upload" onChange={(e) => setUploadImage(e.target.files[0])}/>
      <button onClick={() => handleSubmit()}>Subir Imagem</button>
      </span>
    </div>
  );
};

export default Image;
