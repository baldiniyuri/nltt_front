import { postUserLogin} from "./action";
import { setAuthToken, setUserId, url_host } from "../../../Components/Envs/envs";
import axios from 'axios'


export const UserLoginThunk = (UserData, setError, setLoading) => (dispatch) => {

  axios.post(`${url_host}/api/login/`, {
    "email": UserData.email,
    "password": UserData.password
  })
    .then((info) => {
      setAuthToken(info.data.token)
      setUserId(info.data.userId)
      setLoading(false)
      dispatch(postUserLogin(info.data));
    })
    .catch((error) => {
      if (error.response) {
        setLoading(false)
        setError(error.response.status);
      }
      dispatch(postUserLogin(error));
    });
};