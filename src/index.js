import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        color="blue"
        maxRating={10}
        onSetMovieRating={setMovieRating}
      />{" "}
      <p>You rate this movie {movieRating}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "Okay", "Good", "Amazing"]}
    /> */}

    {/* <StarRating maxRating={5} color="red" className="test" defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
