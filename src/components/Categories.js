import { useGlobalState } from "../context/StoreContext"
import { Header, List } from "semantic-ui-react"

const Categories = () => {
  const [state, dispatch] = useGlobalState()

  const clickHandler = (e) => {
    dispatch({ type: "FILTER_CATEGORIES_GAMES", payload: e.target.id })
  }

  if (state?.categories?.loading) return <p>Loading!</p>
  if (state?.categories?.error) return <p>Error fetching data!</p>

  return (
    <>
      <Header as="h1">Categories</Header>
      <List selection>
        {state?.categories?.data?.map((category) => (
          <List.Item key={category.id}>
            <List.Content>
              <List.Header id={category.id} onClick={clickHandler}>
                {category.name}
              </List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  )
}

export default Categories
