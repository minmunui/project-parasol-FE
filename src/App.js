import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import MainPage from "./components/pages/mainPage/pages/MainPage";
import MainLayout from "./components/layouts/mainLayout/MainLayout";
import useFormat from "./hooks/useFormat";
import StockDetailPage from "./components/pages/stockDetailPage/pages/StockDetailPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import Tooltip from "./components/commons/atoms/Tooltip";
import useTooltip from "./hooks/useTooltip";

export const FormatContext = createContext(null);
export const TooltipContext = createContext(null);
const queryClient = new QueryClient();

function App() {
  const { isPercent, setIsPercent } = useFormat(true);
  const {
    isTooltipVisible,
    tooltipLocation,
    handleMouseMove,
    hideTooltip,
    showTooltip,
    tooltipContent,
  } = useTooltip();
  return (
    <div className={"App relative min-h-screen w-full"}>
      <TooltipContext.Provider
        value={{
          isTooltipVisible,
          tooltipLocation,
          handleMouseMove,
          hideTooltip,
          showTooltip,
          tooltipContent,
        }}
      >
        <FormatContext.Provider value={{ isPercent, setIsPercent }}>
          <SkeletonTheme color={"#202020"} highlightColor={"#aaa"} />
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Tooltip />
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/stock/:id" element={<StockDetailPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </FormatContext.Provider>
      </TooltipContext.Provider>
    </div>
  );
}

export default App;
