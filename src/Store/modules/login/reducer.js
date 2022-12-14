export const userLoginReducer = (state = [], action) => {
    switch (action.type) {
      case "@userLogin/POST":
        const { loginUser } = action;
        return [loginUser];
      default:
        return state;
    }
  };
  