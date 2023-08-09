import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import MainPage from "./components/pages/mainPage/pages/MainPage";
import MainLayout from "./components/layouts/MainLayout";
import useFormat from "./hooks/useFormat";
import StockDetailPage from "./components/pages/stockDetailPage/pages/StockDetailPage";

export const FormatContext = createContext(null);

function App() {
  const { isPercent, setIsPercent } = useFormat(true);

  return (
    <div className={"App relative min-h-screen"}>
      <FormatContext.Provider value={{ isPercent, setIsPercent }}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/stock/:id" element={<StockDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormatContext.Provider>
    </div>
  );
}

export default App;
