import { Route, Routes } from 'react-router-dom';
import PokemonList from "./pages/PokemonList.tsx";

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<PokemonList />} />
    </Routes>
  );
}

export default App
