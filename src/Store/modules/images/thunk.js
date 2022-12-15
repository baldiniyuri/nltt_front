import axios from "axios";
import { postImageAction } from "./action";
import { url_host, getAuthToken, getUserId } from "../../../Components/Envs/envs";


export const PostImagesThunk = (userData, setError) => (dispatch) => {
  let token = getAuthToken()
  let user_id = getUserId()

  const uploadData = new FormData()

  uploadData.append('user_id', user_id)
  uploadData.append('image', userData.image, userData.image.name)

  const config = {headers: {'Content-type': 'multipart/form-data', 'Authorization': `Token ${token}`}};

  axios.post(`${url_host}/api/images/`, uploadData, config)
    .then((info) => {
      dispatch(postImageAction(info.data));
    })
    .catch((error) => {
      setError(error.response.status);
    });
};

