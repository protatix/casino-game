import { useEffect } from "react"
import Layout from "./layout"
import { useGlobalState } from "./context/StoreContext"
import { Grid } from "semantic-ui-react"
import {
  Login,
  Categories,
  Search,
  Games,
  GameScreen,
  Panel,
} from "./components"
import { getRequest } from "./api"

const App = () => {
  const [state, dispatch] = useGlobalState()

  useEffect(() => {
    if (state?.user?.isLogin) {
      dispatch({ type: "FETCH_START_GAMES" })
      dispatch({ type: "FETCH_START_CATEGORIES" })
      getRequest("http://localhost:3001/games")
        .then((data) => {
          dispatch({
            type: "FETCH_SUCCESS_GAMES",
            loading: false,
            payload: data,
          })
        })
        .catch(() => {
          dispatch({ type: "FETCH_ERROR_GAMES", loading: false, error: true })
        })

      getRequest("http://localhost:3001/categories")
        .then((data) => {
          dispatch({
            type: "FETCH_SUCCESS_CATEGORIES",
            loading: false,
            payload: data,
          })
        })
        .catch(() => {
          dispatch({
            type: "FETCH_ERROR_CATEGORIES",
            loading: false,
            error: true,
          })
        })
    }
  }, [state?.user?.isLogin])

  if (!state?.user?.isLogin) {
    return (
      <Layout>
        <Login />
      </Layout>
    )
  }

  if (state?.selectedGame?.code) {
    return (
      <Layout>
        <GameScreen />
      </Layout>
    )
  }

  return (
    <Layout>
      <Grid>
        <Panel />
        <Grid.Column width={4}>
          <Search />
        </Grid.Column>
        <Grid.Column floated="left" width={12}>
          <Games />
        </Grid.Column>
        <Grid.Column floated="right" width={4}>
          <Categories />
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

export default App
