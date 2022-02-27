import React from "react"
import { Header, Divider, Item, Button } from "semantic-ui-react"
import { useGlobalState } from "../context/StoreContext"

const Games = () => {
  const [state, dispatch] = useGlobalState()

  const gameHandler = (code) => {
    dispatch({ type: "SELECTED_GAME", payload: code })
  }

  if (state?.games?.loading) return <p>LOADING!</p>
  if (state?.games?.error) return <p>SOMETHING WENT WRONG!</p>

  return (
    <>
      <Header as="h1">Games</Header>
      <Divider />
      <Item.Group relaxed>
        {state?.games?.filtered?.map((item) => (
          <React.Fragment key={item.code}>
            <Item>
              <Item.Image size="small" src={item.icon} />
              <Item.Content verticalAlign="top">
                <Item.Header>{item.name}</Item.Header>
                <Item.Description>{item.description}</Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => gameHandler(item.code)}
                    floated="right"
                    labelPosition="right"
                    icon="right chevron"
                    content="Play"
                    secondary
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
            <Divider />
          </React.Fragment>
        ))}
      </Item.Group>
    </>
  )
}

export default Games
