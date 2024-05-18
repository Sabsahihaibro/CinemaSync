import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <p>The movie was rated {movieRating} stars!</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Worst", "Bad", "Average", "Good", "Excellent"]}
    />
    <StarRating size={30} color="#c8c8c8" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
