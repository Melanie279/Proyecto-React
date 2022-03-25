import "./style.css";
const Table = () => {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Usuario</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>Agencia</th>
        <th>Acciones</th>
      </tr>
      <tr>
        <td>1</td>
        <td>DESARROLLO WEB</td>
        <td>Dev</td>
        <td>carlos@gmail.com</td>
        <td>902121290</td>
        <td>Cusco</td>
        <td>iconos</td>
      </tr>
      <tr>
        <td>2</td>
        <td>FRONTEND</td>
        <td>Dev2</td>
        <td>carlos@gmail.com</td>
        <td>902121290</td>
        <td>Cusco</td>
      </tr>
      <tr>
        <td>3</td>
        <td>DEVOPS</td>
        <td>Dev3</td>
        <td>carlos@gmail.com</td>
        <td>902121290</td>
        <td>Cusco</td>
      </tr>
      <tr>
        <td>4</td>
        <td>BACKEND</td>
        <td>Dev</td>
        <td>carlos@gmail.com</td>
        <td>902121290</td>
        <td>Cusco</td>
      </tr>
    </table>
  );
};
export default Table;
