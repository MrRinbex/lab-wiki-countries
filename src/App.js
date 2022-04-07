// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
  <div className="App">
    <Navbar/>
    <main>
      <div className="main">
        <CountriesList/>
        </div>
        <div className="description">
        <Routes>
            <Route path="/:id" element={<CountryDetails/>} ></Route>
        </Routes>
      </div>
    </main>
  </div>
  );
}
export default App;