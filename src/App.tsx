// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "C:/Users/ayool/OneDrive/Desktop/life-helper-app/src/pages/Home";
import BusinessIdeas from "C:/Users/ayool/OneDrive/Desktop/life-helper-app/src/pages/BusinessIdeas.tsx";
import MarketPrices from "C:/Users/ayool/OneDrive/Desktop/life-helper-app/src/pages/MarketPrices.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-ideas" element={<BusinessIdeas />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        {/* More pages can be added later */}
      </Routes>
    </Router>
  );
}

export default App;
