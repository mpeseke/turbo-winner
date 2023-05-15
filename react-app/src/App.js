import { Routes, Route } from "react-router-dom";

import AllPokemonPage from "./pages/AllPokemon";
import NewPokemonPage from "./pages/NewPokemon";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllPokemonPage />} />
        <Route path="/new-pokemon" element={<NewPokemonPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
