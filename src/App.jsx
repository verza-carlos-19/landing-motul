import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos/Productos";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useState } from "react";
import ThemeContext, { themes } from "./context/context";
import Modal from "./Components/ModalConfimation/ModalConfirmation";

function App() {
  const [tema, setTema] = useState(themes.close);

  const handleTheme = () => {
    tema === themes.close ? setTema(themes.open) : setTema(themes.close);
  };
  return (
    <>
      <ThemeContext.Provider value={{ tema, handleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout></Layout>}>
              <Route index element={<Home />} />
              <Route path="nosotros" element={<About />} />
              <Route path="productos" element={<Productos />} />
              <Route path="contacto" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
