# Financier (bun intended)

Live version can be found here: TODO add link here

Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a small project to demonstrate my skills in Node, Typescript and React.
- [frontend](./src/frontend)
- [backend](./src/backend) TODO create the backend skeleton

### Spec

- [x] frontend application showing Apple stock price in graphical way (use HighCharts)
- [ ] backend with TS/Node/Express to fetch data from Alphavantage.co
- [ ] package backend into Docker container
- [ ] deploy project into cloud
- [ ] make the code clean and awesome

## Running locally

You can run this is devcontainer with Docker, VS Code and [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Alternatively, you can run the project on host machine but that requires Node 18.

### Devcontainer

Devcontainer makes your life easy.

- Open project in VS Code
- Open command palette and run `Reopen in container`
- Creates the devcontainer with correct Node version, and installs Node modules automatically
- to run frontend you can use VS Code task (_Start frontend_), or manually by executing:
    - `cd /workspace/src/frontend`
    - `npm run start`
    - frontend is running on [port 3000](http://localhost:3000)