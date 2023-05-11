import "./App.css";
import { createRoot } from "react-dom/client";

const App = () => {
  return null;
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
