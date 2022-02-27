import { useState, memo, useCallback } from "react"
import { Input } from "semantic-ui-react"
import { useGlobalState } from "../context/StoreContext"

const Search = memo(() => {
  const [{}, dispatch] = useGlobalState()
  const [value, setValue] = useState("")

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
    dispatch({ type: "FILTER_SEARCH_GAMES", payload: e.target.value })
  }, [])

  return (
    <Input
      value={value}
      onChange={handleChange}
      icon="search"
      placeholder="Search..."
    />
  )
})

export default Search
