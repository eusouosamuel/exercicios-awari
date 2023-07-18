import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
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
    </div>
  );
};

export default Home;
