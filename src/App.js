import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import UsersList from "./components/Users/UsersList";
import User from "./components/Users/User";
import PokemonsList from "./components/Pokemons/PokemonsList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/pokemons" element={<PokemonsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
