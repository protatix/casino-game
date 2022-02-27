import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders login form", () => {
  render(<App />)
  const userNameInput = screen.getByPlaceholderText("Username")
  expect(userNameInput).toBeInTheDocument()

  const userPasswordInput = screen.getByPlaceholderText("Password")
  expect(userPasswordInput).toBeInTheDocument()
})
