import { createContext, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./Components/MainContent/CountryDetail/CountryDetail";
import Footer from "./Components/Footer";
export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("lightTheme");
  const tongleTheme = () => {
    setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme");
  };
  const valueTheme = { theme, tongleTheme };
  return (
    <ThemeContext.Provider value={{ valueTheme }}>
      <div className={theme}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route exact path='/' element={<MainContent />} />
              <Route path='/region/:regionName' element={<MainContent />} />
              <Route path='/search/:name' element={<MainContent />} />
              <Route path='/country/:countryName' element={<CountryDetail />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
