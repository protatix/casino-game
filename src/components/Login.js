import React, { useState } from "react"
import { Grid, Form, Button, Message } from "semantic-ui-react"
import { postRequest } from "../api"
import { useGlobalState } from "../context/StoreContext"

const Login = () => {
  const [{}, dispatch] = useGlobalState()
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    errorText: "",
  })

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: "FETCH_START_USER" })
    postRequest("http://localhost:3001/login", loginInfo)
      .then((data) => {
        if (data.status === "success") {
          dispatch({
            type: "FETCH_SUCCESS_USER",
            isLogin: true,
            payload: data.player,
          })
          return
        }
        setLoginInfo({ username: "", password: "", errorText: data.error })
      })
      .catch(() => dispatch({ type: "FETCH_ERROR_USER" }))
  }

  return (
    <Grid columns={1} centered>
      <Form onSubmit={submitHandler} error={!!loginInfo.errorText}>
        <Form.Field required={true}>
          <Form.Input
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
            value={loginInfo.username}
            icon="user"
            iconPosition="right"
            placeholder="Username"
          />
        </Form.Field>
        <Form.Field required={true}>
          <Form.Input
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            value={loginInfo.password}
            icon="lock"
            type="password"
            iconPosition="right"
            placeholder="Password"
          />
        </Form.Field>
        <Form.Field>
          <Button
            labelPosition="right"
            icon="right chevron"
            content="Login"
            disabled={!loginInfo.username || !loginInfo.password}
            basic
          />
        </Form.Field>
        {!!loginInfo.errorText && (
          <Message
            error
            header="Action Forbidden"
            content={loginInfo.errorText}
          />
        )}
      </Form>
    </Grid>
  )
}

export default Login
