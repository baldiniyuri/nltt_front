import "./image_style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {postImage, getUserImage} from "./Components/image_requisitions";


const Image = () => {
  const [photo, setPhoto] = useState(null)
  const [uploadImage, setUploadImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const userImage = useSelector((state) => state.getImage)
  const dispatch = useDispatch()


  useEffect(() => {
    if (uploadImage) {
          setPhoto(URL.createObjectURL(uploadImage))
    }
  }, [uploadImage])

  const handleSubmit = () => {
    let userData = {image: uploadImage}
    let data = {dispatch, userData, setError, setLoading}
    postImage(data)
  }

  return (
    <div className="image-container">
      Redimencionar Imagens
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
