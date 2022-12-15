export const postImageReducer = (state = [], action) => {
    switch (action.type) {
      case "@postImage/POST":
        const { postImage } = action;
        return [postImage];
      default:
        return state;
    }
  };
  