// import React from "react";
// import ReactDOM from "react-dom/client";
// import Index from "./index.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Index />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Index />
    </Router>
  </React.StrictMode>
);
