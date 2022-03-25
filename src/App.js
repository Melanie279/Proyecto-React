// import logo from './logo.svg';

import './App.css';
import agencias from "./data/agencias"
// import usuarios from './data/usuarios.json'
// import perfiles from './data/perfiles.json'
// import Prueba from './pages/fernando';


import Button2 from './melanie/componentes/button2';
import Button1 from './melanie/componentes/button1';
import Input1 from './melanie/componentes/input1';
import Select from './melanie/componentes/select';
import Card from './melanie/componentes/card';
import Container from './melanie/componentes/container';
import MaterialTable from "material-table"

function App() {
  // console.log("User",usuarios)
  // console.log("perfiles",perfiles)
  // console.log("agencias",agencias)
  // return (
  //   <Prueba/>
  // );

  const data= [
	{
	  "id": 1,
	  "name": "DESARROLLO WEB",
	  "user": "Dev",
	  "mail": "calros@gmail.com",
	  "phone": "902121290",
	  "agency": "cusco"
	},
	{
	  "id": 2,
	  "name": "FRONTEND",
	  "user": "Dev2",
	  "mail": "123@gmail.com",
	  "phone": "1111111",
	  "agency": "cusco"
	},
	{
	  "id": 3,
	  "name": "DEVOPS",
	  "user": "Dev3",
	  "mail": "123fer@gmail.com",
	  "phone": "1235124531",
	  "agency": "cusco"
	},
	{
	  "id": 4,
	  "name": "BACKEND",
	  "user": "Dev4",
	  "mail": "pepeback@gmail.com",
	  "phone": "987654321",
	  "agency": "cusco"
	}
  ]

  const columnas= [
	  {
		  title: 'ID',
		  field: 'id',
		  type: 'numeric'
	  },
	  
	  {
		  title:'Nombre',
		  field: 'name'
	  },

	  {
		title:'Usuario',
		field: 'user'
	  },

	  {
		title:'Email',
		field: 'mail'
	  },

	  {
		title:'Teléfono',
		field: 'phone'
	  },

	  {
		title:'Agencia',
		field: 'agency'
	  },

	//   {
	// 	title:'Acciones',
	// 	field: ''
	//   }
  ];
  return(
    <>
		<div className='main-container'>
			<Container>
				<Card/>
				<div>
					<div className="input-line">
						<Button1 name= "+Añadir"/>
						<Input1/>
						<Button1 name= "Buscar"/>
						<Select  name= "Agencias" nameSelect= "Seleccione Oficina" data={agencias}/>
						<Select name= "Perfiles" nameSelect= "Seleccione perfil"/>
						<Select name= "Ordenar por" nameSelect= "A-Z"/>
					</div>

					<div className='table-container'>
						<MaterialTable
							columns= {columnas}
							data= {data}
							actions= {[
								{
									icon:'edit',
									tooltip: 'Editar usuario',
									onClick: (event,rowData)=>alert('Has presionado editar usuario: '+rowData.user),
								},
								{
									icon:'delete',
									tooltip: 'Eliminar usuario',
									onClick: (event,rowData)=>alert('Estas seguro de eliminar al usuario: '+rowData.user),
								}

							]}
							options={{
									// showFirstLastPageButtons:false,
									exportButton:false,
									showTitle: false,
									search: false,
									paging: true,
									filtering: true,
									exportButton: true,
									actions: true,
									actionsColumnIndex: -1,
									pageSize: 10,
							}}

							// localization=({
							// 	header:(actions:"Acciones")
							// })
						/>
					</div>
					
					<div className='out-line'>			
						<Button2 name= "EXPORTAR PDF"/>
						<Button2 name= "EXPORTAR EXCEL"/>

					</div>
				</div>
			</Container>
		</div>
    </>
  );
}

export default App;
