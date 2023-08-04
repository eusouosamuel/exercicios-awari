import { useEffect, useState } from 'react';
import { localStorageGet, storageRemove } from '../../utils/LocalData';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const [usuario, setUsuario] = useState();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    storageRemove();
    navigate('/');

  };

  useEffect(() => {
    //const localData = JSON.parse(localStorage.getItem('usuario'));
    //if (localData !== null) {
    //  setUsuario(localData);
    //}
    const localData = localStorageGet();
    if (localData !== null) {
      if  (Object.keys(localData).length > 0) {
        setUsuario(localData);
      }
    }
  }, []);
  return(
    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '25px'}}>
      {usuario !== undefined
      ?
      <div>
        <strong>Usuário: </strong>
        <span>{usuario['usuario']}</span>
        <button type="button" onClick={onLogoutHandler}>Logout</button>
      </div>
      :
      <span>Sem dados de Usuário</span>
      }
    </div>
  );
};

export default LoginView;
