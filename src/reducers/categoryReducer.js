const categoryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START_CATEGORIES":
      return { ...state, loading: true }
    case "FETCH_SUCCESS_CATEGORIES":
      return { ...state, loading: false, data: action.payload }
    case "FETCH_ERROR_CATEGORIES":
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default categoryReducer
