# Ip Address Tracker Client

## Instructions

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
