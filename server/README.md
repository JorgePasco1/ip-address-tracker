# Ip Address Tracker Server

## Instructions

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
