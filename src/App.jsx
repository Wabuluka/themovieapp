import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Rented from "./pages/Rented";
import { Footer } from "./components/Footer";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { Plans } from "./pages/Plans";
import { SingleMovie } from "./pages/SingleMovie";
import { useSelector } from "react-redux";
import { NotFound } from "./pages/NotFound";

function App() {
  const { movieList } = useSelector((state) => state.movies);
  return (
    <BrowserRouter>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/rented" element={<Rented />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/subscription" element={<Plans />} />
          <Route path={`/movie/:id`} element={<SingleMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
