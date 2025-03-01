import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/Header";
import Home from "./pages/Home";
import Authorization from "./pages/auth/Authorization";
import Favorites from "./pages/Favorites";
import Rented from "./pages/Rented";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/rented" element={<Rented />} />
          <Route path="/auth" element={<Authorization />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
