# Financier (pun intended)

| :exclamation:  Note that the app is currently working due to AlphaVantage endpoint used here became premium. Therefore data fetching won't work. Not going to update this for now. |
|-----------------------------------------|

Live version can be found here: [Financier frontend](https://financier.hireokkimus.xyz/)

Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a small project to demonstrate my skills in Node, Typescript and React.

- [frontend](./src/frontend)
- [backend](./src/backend)

### Spec

- [x] frontend application showing Apple stock price in graphical way (use HighCharts)
- [x] backend with TS/Node/Express to fetch data from Alphavantage.co
- [x] package backend into Docker container
- [x] deploy project into cloud
  - [x] frontend
  - [x] backend
- [x] make the code clean and awesome (at least in some standards)

#### Personal additions

- [x] make possible to fetch other than Apple stock
- [x] would like the have the API response cached (Redis) to have faster response time and not making calls to AlphaVantage all the time

## Running locally

You can run the project on host machine or in a devcontainer with Docker. Devcontainer is prefered as it makes the setup easier.

### Requirements

- (free) API key to [AlphaVantage](https://www.alphavantage.co/) (get yours [here](https://www.alphavantage.co/support/#api-key))
  - place the API key into `.env` file in backend project

Devcontainer route:

- Docker
- VS Code with [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) (or any IDE implementing devcontainer.json spec)

On host machine:

- Node 18 (optionally with `nvm` as you can run `nvm use` in the frontend and backend)
- Redis (optional as code can live without it)
- copy `.env-sample` file and rename it as `.env`

### Devcontainer

Devcontainer makes your life easy. It installs Node modules automatically, copies .env file, runs Redis and installs needed tooling for you.

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

## Tests

There are some tests for some parts of the application in frontend and backend. Not a major coverage but it's something.

### Running tests

> Expecting you to use devcontainer

For frontend:

```bash
cd /workspace/src/frontend
npm run test
# or to get coverage as well
npm run test -- --coverage
```

For backend:

```bash
cd /workspace/src/backend
npm run test
# or to get coverage as well
npm run test:coverage
# or in watch mode
npm run test:watch
```
