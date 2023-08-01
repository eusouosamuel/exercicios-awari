import { Link, useNavigate } from 'react-router-dom';
import LoginView from '../components/login_view/LoginView';

const Home = () => {
  /*const onSaveStorage = () => {
    localStorage.setItem('usuario', 'Samuel');

  };*/

  const navigate = useNavigate();

  const onLoginPage = () => {
    navigate('/conta/login');
  };

  return(
    <div>
      <LoginView />
      <div>
        <Link to="/conta/login">Login</Link>
      </div>
      <h1>Página Inical</h1>
      <div className="list-center">
        <ul>
          <li>
            <Link to="/usuarios">Exercício Lista de Usuários</Link>
          </li>
          <li>
            <Link to="/pokemon">Exercício Pokémon</Link>
          </li>
        </ul>
      </div>
      <div>
        <button type="button" onClick={onLoginPage}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Home;
