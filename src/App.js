import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </div>
  );
}

export default App;
