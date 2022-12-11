import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/index.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);
