import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";


const container = document.getElementById("root")

ReactDOM.createRoot(container)
.render(
  <React.StrictMode>
       <Provider store={store}>
      <BrowserRouter primary={false}>
          <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
)

reportWebVitals();