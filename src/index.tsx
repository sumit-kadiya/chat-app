import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./store/User-Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
