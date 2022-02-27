import React, { createContext, useContext, useReducer } from "react"
import {
  gameReducer,
  categoryReducer,
  selectedGameReducer,
  userReducer,
  combineReducers,
} from "../reducers"

const rootReducer = combineReducers({
  categories: categoryReducer,
  games: gameReducer,
  selectedGame: selectedGameReducer,
  user: userReducer,
})

const initialState = {
  user: {
    player: {},
    isLogin: false,
    error: false,
  },
  games: {
    filtered: [],
    data: [],
    loading: false,
    error: false,
  },
  categories: {
    data: [],
    loading: false,
    error: false,
  },
  selectedGame: {
    code: "",
  },
}

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const useGlobalState = () => useContext(StoreContext)
