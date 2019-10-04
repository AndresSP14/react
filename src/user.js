import React from 'react';
import { Link} from 'react-router-dom'


import './App.css'

class User extends React.Component{
    render(){

        const {row} = this.props
        return(
          //paso como parametro el id ".bind(this, row.id)"
        
          <Link to={"/perfil/"+row.nombre+row.id}>

            <div key={row.id} onClick={this.props.showUser.bind(this, row.id, row.nombre, row.email, row.telefono,row.img,row.descrip)}>
            <li> 
            <img className="img mr-5" src={row.img}/>
             {row.nombre}  
             </li>
          </div>
        
          </Link>
        
        );
    }
}

export default User;