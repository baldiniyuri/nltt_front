import axios from "axios";
import { postImageAction, getImageAction } from "./action";
import { url_host } from "../../../Components/Envs/envs";


export const PostImagesThunk = (userData, setError) => (dispatch) => {
  const uploadData = new FormData()
  uploadData.append('user_id', userData.id)
  uploadData.append('image', userData.image, userData.image.name)

  const config = {headers: {'Content-type': 'multipart/form-data'}};

  axios.post(`${url_host}/api/images/`, uploadData, config)
    .then((info) => {
      dispatch(postImageAction(info.data));
    })
    .catch((error) => {
      setError(error.response.status);
    });
};


export const GetImageThunk = (userId, setError) => (dispatch) => {
    axios.get(`${url_host}/api/images/${userId}/`)
      .then((info) => {
        dispatch(getImageAction(info.data));
      })
      .catch((error) => {
        setError(error.response.status);
      });
  };