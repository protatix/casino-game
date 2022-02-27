const selectedGameReducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_GAME":
      return { ...state, code: action.payload }
    case "RESET_GAME":
      return { ...state, code: "" }
    default:
      return state
  }
}

export default selectedGameReducer
