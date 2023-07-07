const Usuarios = () => {
  const usuarios = [
    {
      codigo: 1,
      nome: 'João'
    },
    {
      codigo: 2,
      nome: 'Samuel'
    },
    {
      codigo: 3,
      nome: 'Mikellainy'
    },
    {
      codigo: 4,
      nome: 'Maria'
    }

  ];

  return (
    <>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((item, index) =>
          <li key={index}>
            {item.codigo} - {item.nome}
          </li>
        )}
      </ul>
    </>

  );

};

export default Usuarios;
