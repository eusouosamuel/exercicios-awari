import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div>
      <Link to="/">Voltar para o Home</Link>
      <h1>404 - Página não encontrada</h1>
    </div>
  );
};

export default NotFound;
