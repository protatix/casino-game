const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START_USER":
      return { ...state }
    case "FETCH_SUCCESS_USER":
      return { ...state, isLogin: true, player: action.payload }
    case "FETCH_ERROR_USER":
      return { ...state, error: true }
    case "LOG_OUT_USER":
      return { ...state, isLogin: false, player: {} }
    default:
      return state
  }
}

export default userReducer
