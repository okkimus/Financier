# Financier (bun intended)

Live version can be found here: [Financier frontend](https://financier.hireokkimus.xyz/)

Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a small project to demonstrate my skills in Node, Typescript and React.

- [frontend](./src/frontend)
- [backend](./src/backend) TODO create the backend skeleton

### Spec

- [x] frontend application showing Apple stock price in graphical way (use HighCharts)
- [x] backend with TS/Node/Express to fetch data from Alphavantage.co
- [x] package backend into Docker container
- [x] deploy project into cloud
  - [x] frontend
  - [x] backend
- [ ] make the code clean and awesome

#### Personal additions

- [x] make possible to fetch other than Apple stock
- [x] would like the have the API response cached (Redis) to have faster response time and not making calls to AlphaVantage all the time

## Running locally

You can run this is devcontainer with Docker, VS Code and [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

Alternatively, you can run the project on host machine but that requires Node 18.

### Devcontainer

Devcontainer makes your life easy.

- Open project in VS Code
- Open command palette and run `Reopen in container`
- Creates the devcontainer with correct Node version, and installs Node modules automatically
- you can run VS Code task (_Start locally_) to run both frontend and backend
  - or run frontend you can use VS Code task (_Start frontend_), or manually by executing:
    - `cd /workspace/src/frontend`
    - `npm run start`
    - frontend is running on [port 3000](http://localhost:3000)
  - or run backend you can use VS Code task (_Start backend_), or manually by executing:
    - `cd /workspace/src/backend`
    - `npm run dev`
    - backend is running on [port 3001](http://localhost:3001)
