import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import dadosUsuario from '../../json/usuarios.json';

const Usuarios = () => {
  return (
    <div>
      <Link to="/">Voltar para o Home</Link>
      <h1 style={{
        textAlign: 'center',
        borderBottom: '2px solid black'
      }}>Lista de Usuários</h1>
      <div style={{ margin: '16px 30px' }}>
        <table style={{
          border: '1px solid #000',
          width: '100%'
        }}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome de Usuário</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {dadosUsuario?.length > 0
              ?
              dadosUsuario.map((items, index) =>
                <tr key={index}>
                  <td style={{ textAlign: 'center' }}>{items.id}</td>
                  <td style={{ textAlign: 'center' }}>{items.author}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Link to={`/usuarios/detalhes/${items.id}`}>
                      Detalhes
                    </Link>
                  </td>
                </tr>
              )
              :
              <tr>
                <span>Tabela vazia</span>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios ;
