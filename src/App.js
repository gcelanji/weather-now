import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import ShowWeather from "./pages/ShowWeather";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/show-weather" element={<ShowWeather />} />
      </Routes>
    </Layout>
  );
}

export default App;
