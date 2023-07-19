import { useState } from 'react';
import { AppContext } from './AppContext';

export default function AppProvider({children}) {
  // acesso: 'admin', 'employ', 'user'
  const [credentials, setCredentials] = useState({
    usuario: 'Samuel',
    email: 'keu@gmail.com',
    acesso: ['ADM', 'EMP'],
    token: '1B21BHIU1H2I3H23H12PI1H234U4IHOIUH',
    logado: true
  });

  return(
    <AppContext.Provider value = {{credentials, setCredentials}}>
      {children}
    </AppContext.Provider>
  );
}
