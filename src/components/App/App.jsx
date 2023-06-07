import "./App.style.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MenuPage from "../../pages/MenuPage";
import DiscoverPage from "../../pages/DiscoverPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </HashRouter>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
