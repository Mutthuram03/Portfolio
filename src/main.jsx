import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import "./index.css";

// Force light mode on initial load by removing any stored preference
localStorage.removeItem("theme");

createRoot(document.getElementById("root")).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <App />
  </ThemeProvider>
);