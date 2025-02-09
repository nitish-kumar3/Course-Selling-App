import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QcX6kECbgbmkR5t9WMBO1TvT9crEjYpZkGKESyLMPC8FSUVxHgJzs1C9MDQJnfnfndQCCXwhOknoZmuRqRgwooc00g4hRBXcw"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
