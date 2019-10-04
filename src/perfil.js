import React from 'react';

import './perfil.css';

//import User from './user';


class Perfil extends React.Component{
    
 

    render(){
      const {user} = this.props;
    return (
      <div className="caja-user">
      
        <p className="item">{user.nombre}</p>
     
        <p><img className="img-user" src={user.img}/></p>
        
        <p>{user.descrip}</p>
      </div>
      );
    }
    
}

export default Perfil;