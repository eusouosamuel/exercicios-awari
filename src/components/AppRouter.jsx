import { Outlet, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Pokemon from '../pages/pokemon/Pokemon';
import Home from '../pages/Home';
import Usuarios from '../pages/usuarios/Usuarios';
import Details from '../pages/usuarios/Details';
import Login from '../pages/account/Login';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/conta/login', element: <Login /> },
      { path: '/usuarios', element: <Usuarios /> },
      { path: '/usuarios/detalhes/:codigo', element: <Details /> },
      { path: '/pokemon', element: <Pokemon /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default routerConfig;
