import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from "aws-amplify";
import config from "./config.ts";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolClientId: config.cognito.APP_CLIENT_ID,
    },
  },
  Storage: {
    S3: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
    },
  },
  API: {
    REST: {
      noteAPI: {
        endpoint: "https://ngojw5vo6f.execute-api.ap-southeast-2.amazonaws.com",
        region: "ap-southeast-2",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
