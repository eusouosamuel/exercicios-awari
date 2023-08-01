import { useRef } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import { credentialActions } from '../../store/user';

const Login = () => {
  const usernameRef = useRef('');
  const passcodeRef = useRef('');

  const handleLogin = (event) => {
    event.preventDefault();

    const usuario = {
      id: 1,
      usuario: usernameRef.current.value,
      email: 'samuel@gmail.com',
      acesso: ['customer'],
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsIm5hbWUiOiJTYW11ZWwgQ8OibmRpZG8gZGEgU2lsdmEiLCJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJsb2dhZG8iOnRydWUsImFjZXNzbyI6WyJjdXN0b21lciJdLCJpYXQiOjE1MTYyMzkwMjJ9.CkWIw6_7CIfxWs1ylooXBdRqOm_9mOrLGEnCddlnxrA'
    };

    store.dispatch(credentialActions.add(usuario));
  };


  return (
    <form onSubmit={(event) => handleLogin(event)}>
      <div>
        <Link to="/">Home Page</Link>
        <h1>LOGIN</h1>
        <label htmlFor="lgusername">Username or Email</label>
        <input type="text" id="lgusername" ref={usernameRef}/>
      </div>
      <div>
        <label htmlFor="lgpasscode">Senha</label>
        <input type="text" id="lgpasscode" ref={passcodeRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
