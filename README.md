# IP Address Tracker 📍

Express + React application that allows the user to search for any IP addresses or domains and see the key information and location.

## How to run locally 💻

This project is a monorepo that includes the frontend and backend applications. The backend works mostly as a proxy for the Ipify API, to avoid exposing API keys to the client.

### Prerequisites

You will need [node.js and npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to run both the backend and frontend applications. Additionally, you will need an [Ipify API key](https://geo.ipify.org/signup) to use the location service that powers up the app.

_\* Note: You can run any of the commands below with yarn or any npm alternative of preference._

### Running the backend

Move to the `/server` directory:

```sh
cd server
```

Install the dependencies:

```sh
npm install
```

Create a `.env` file to store environment variables. Include the following variable:

```
IPIFY_API_KEY=<your_key_here>
```

Then, you can start the server:

```sh
npm run dev
```

This will get the express application running on port 4000. You can change the default port by adding another environment variable to your `.env` file, before starting the server:

```
PORT=5000
```

_\* Note: We're using nodemon instead of the default node cli app to run the server, this way we can make changes get automatic refreshs on code updates._

### Running the Frontend

Move back to the root directory:

```sh
cd ..
```

Move to the `/client` directory:

```sh
cd client
```

Install the dependencies:

```sh
npm install
```

Create a `.env.local` file to store environment variables. Include the following variable to indicate the endpoint to use from the server. In case you're running on the default port (4000), you would need to include the following:

```
REACT_APP_LOCATION_SERVICE_URL=http://127.0.0.1:4000/api/v1/location
```

Then, you can start the React Application:

```sh
npm start
```

Now you have the application ready to be used on port 3000. If the previous script didn't trigger your browser, you just have to visit `http://localhost:3000` 🎉.
