import "react-app-polyfill/ie9";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import PrinterReciept from "./receipt-printer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="print" element={<PrinterReciept />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
