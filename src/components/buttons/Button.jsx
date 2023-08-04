import './button.css';
const Button = ({action}) => {
  return(
    <button type="button" onClick={action}>Fazer Login</button>
  );

};

export default Button;
