import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import dadosusuario from "./../json/usuarios.json";
import { useEffect, useState } from "react";

const Details  = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState();

    const buscaUsuario = () => {
        const usuario = dadosusuario?.find((usuario, index) => usuario.id === id);
        setUsuario(usuario);
    }

    useEffect(() => {
        console.log('AQUI');
        buscaUsuario();
    });

    return(
        <div style={{margin: '0 16px'}}>
            {usuario !== undefined
            ?   <table style={{
                border: '1px solid #c00',
                backgroundColor: '#eee',
                width: '100%',
                marginTop: '30px'
            }}>
                <tr>
                    <th style={{textAlign: 'right'}}>Código</th>
                    <td>{usuario.id}</td>
                </tr>
                <tr>
                    <th style={{textAlign: 'right'}}>Nome do Usuário</th>
                    <td>{usuario.author}</td>
                </tr>
                </table>
            :   'sem dados'}

        </div>
    );
}

export default Details ;