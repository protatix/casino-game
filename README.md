# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# comeon-javascript-test

The main goal of this project creates a minimal, working casino website with React.

## Description

I have mainly used React Hooks in the project. This allows function components to have access to state and other React features. I made folder structure as much as simple. You can check components, context, layout, mocks, and reducers in the src folder. Both of the packages such as styled-components and material UI have been inserted into the assignment.

There are 4 parts to the project. Login, Logout, Games screen, and gameplay screen. For further information you can check the below;

### Login functionality

- Connect the login form to the /login ajax call.
- On valid username/password, transition to the games list screen.
- On invalid username/password, provide feedback and allow to try again.

### Log out functionality

- Connect the log out button to the /logout ajax call.
- On valid logout, transition to the login screen with empty input fields.

### Games list screen

- Requires user to be logged in
- List all games from the /games ajax call.
- List categories from /categories ajax call.
- Provide functionality for filtering by typing.
- Provide functionality to filter by category.
- Make it possible to start a game by clicking on the play icon.

### Gameplay screen

- Requires user to be logged in
- Load the selected game via the provided API
- Provide a way to go back to the Games list screen

## Usage

Before the run React App, you should have run for server the following script.

```bash
  yarn server
```

Then you can start React App with the following script.

```bash
  yarn client
```
