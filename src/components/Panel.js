import { Feed, Grid, Button } from "semantic-ui-react"
import { useGlobalState } from "../context/StoreContext"
import { postRequest } from "../api"

const Panel = () => {
  const [state, dispatch] = useGlobalState()

  const logoutHandler = () => {
    postRequest("http://localhost:3001/logout", {
      username: state?.user?.player?.username,
    }).then((data) => {
      if (data.status === "success") {
        dispatch({ type: "LOG_OUT_USER" })
      }
    })
  }

  return (
    <Grid.Column width={12}>
      <Feed>
        <Feed.Event>
          <Feed.Label image={state?.user?.player?.avatar} />
          <Feed.Content>
            <Feed.Summary>{state?.user?.player?.name}</Feed.Summary>
            <Feed.Summary>{state?.user?.player?.event}</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <Button
        onClick={logoutHandler}
        labelPosition="left"
        icon="left chevron"
        content="Log Out"
        secondary
      />
    </Grid.Column>
  )
}

export default Panel
