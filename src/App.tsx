import { Route, Routes } from 'react-router-dom';
import Pokemon from "./pages/Pokemon.tsx";

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Pokemon />} />
    </Routes>
  );
}

export default App
