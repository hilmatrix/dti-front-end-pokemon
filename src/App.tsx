import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PokemonDetail from "./pages/PokemonDetail.tsx";
import PokemonList from "./pages/PokemonList.tsx";
import store from './redux/store.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/detail/:subPage" element={<PokemonDetail url={""} />} />
      </Routes>
    </Provider>
  );
}

export default App
