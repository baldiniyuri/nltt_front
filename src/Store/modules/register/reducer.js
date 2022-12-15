export const userRegisterReducer = (state = [], action) => {
    switch (action.type) {
      case "@userRegister/POST":
        const { registerUser } = action;
        return [registerUser];
      default:
        return state;
    }
  };
  