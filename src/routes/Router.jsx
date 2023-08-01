import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from '../pages/usuarios/Usuarios';
import Details from '../pages/usuarios/Details';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Pokemon from '../pages/pokemon/Pokemon';
import Login from '../pages/account/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/detalhes/:id" element={<Details />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/conta/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
