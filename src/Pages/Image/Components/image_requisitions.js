import { PostImagesThunk, GetImageThunk } from "../../../Store/modules/images/thunk";

export const postImage = async (data) => {
    data.dispatch(PostImagesThunk(await data.userData, data.setError, data.setLoading))
}


export const getUserImage = async (data) => {
    data.dispatch(GetImageThunk(data.user_id, data.setError));
};