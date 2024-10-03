import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PokemonList from "./pages/PokemonList.tsx";
import store from './redux/store.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </Provider>
  );
}

export default App
