export const postImageReducer = (state = [], action) => {
    switch (action.type) {
      case "@postImage/POST":
        const { postImage } = action;
        return [postImage];
      default:
        return state;
    }
  };
  

export const getImageReducer = (state = [], action) => {
    switch (action.type) {
      case "@getImage/GET":
        const { getImage } = action;
        return [getImage];
      default:
        return state;
    }
  };
  