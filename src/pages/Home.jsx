import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>Página Inical</h1>
      <ul>
        <li>
          <Link to="/usuarios">Exercício Lista de Usuários</Link>
        </li>
        <li>
          <Link to="/pokemon">Exercício Pokemon</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
