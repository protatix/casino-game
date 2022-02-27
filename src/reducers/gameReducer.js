const gamesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START_GAMES":
      return { ...state }
    case "FETCH_SUCCESS_GAMES":
      return {
        ...state,
        loading: false,
        data: action.payload,
        filtered: action.payload,
      }
    case "FETCH_ERROR_GAMES":
      return { ...state, loading: false, error: action.payload }
    case "FILTER_SEARCH_GAMES":
      return {
        ...state,
        filtered: state.data.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      }
    case "FILTER_CATEGORIES_GAMES":
      const id = parseInt(action.payload)
      return {
        ...state,
        filtered: state.data.filter((item) => item.categoryIds.includes(id)),
      }
    default:
      return state
  }
}

export default gamesReducer
