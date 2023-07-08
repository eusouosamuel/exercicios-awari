import { Link, useParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import dadosusuario from '../../json/usuarios.json';
import { useEffect, useState } from 'react';

const Details = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState();

  const buscaUsuario = () => {
    const usuario = dadosusuario?.find((usuario) => usuario.id === id);
    setUsuario(usuario);
  };

  useEffect(() => {
    console.log('AQUI');
    buscaUsuario();
  });

  return (
    <div style={{ margin: '0 16px' }}>
      <div>
        <Link to="/">Voltar para o Início</Link>
        <span> | </span>
        <Link to="/usuarios">Voltar para Usuarios</Link>
      </div>
      {usuario !== undefined
        ? <table style={{
          border: '1px solid #c00',
          backgroundColor: '#eee',
          width: '100%',
          marginTop: '30px'
        }}>
          <tr>
            <th style={{ textAlign: 'right' }}>Imagem</th>
            <td>
              <img src={usuario.download_url} alt="Imagem de Usuario" width="72" height="72" />
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: 'right' }}>Tamanho da imagem</th>
            <td>
              <span>{usuario.width}x{usuario.height}</span>
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: 'right' }}>Mídia Social</th>
            <td>
              <Link to={usuario.url} target="_blank">Ver meu Perfil</Link>
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: 'right' }}>Código</th>
            <td>{usuario.id}</td>
          </tr>
          <tr>
            <th style={{ textAlign: 'right' }}>Nome do Usuário</th>
            <td>{usuario.author}</td>
          </tr>
        </table>
        : 'sem dados'}
    </div>
  );
};

export default Details;
