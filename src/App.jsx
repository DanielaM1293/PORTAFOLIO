import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca, Error404, Home, Servicios } from "./pages"; 
import Menu from "./components/Menu";
import "./App.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
