import { useEffect } from "react"
import { useGlobalState } from "../context/StoreContext"
import { Grid, Button } from "semantic-ui-react"

const GameScreen = () => {
  const [state, dispatch] = useGlobalState()

  useEffect(() => {
    window.comeon.game.launch(state?.selectedGame?.code)
  }, [])

  return (
    <>
      <Grid columns={1} centered>
        <div id="game-launch"></div>
      </Grid>
      <Grid columns={1} centered>
        <Button
          onClick={() => dispatch({ type: "RESET_GAME" })}
          labelPosition="left"
          icon="left chevron"
          content="Back"
          secondary
        />
      </Grid>
    </>
  )
}

export default GameScreen
