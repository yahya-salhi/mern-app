// src/App.tsx
import { ThemeProvider } from "@/context/ThemeContext";

import { Box } from "./components/ui/Box";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/ui/NavBar";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <Box className="min-h-screen">
        <NavBar />
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
