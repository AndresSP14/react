import React, { Component } from 'react';
//import UserList from './UserList';
//import UserForm from './UserForm';
//var arrayPersonas = require('./personas.json');
import datos from './personas.json';
import Users from './users';
//import Perfil from './perfil';




class Main extends Component {
  constructor(){
    super();
    this.state={
      data:datos, 
      show:true

    };
  }
   
  Click = ()=>{
    this.setState({show: !this.state.show})
  }
  

  render(){
   if(this.state.show){
    return(
      <div className="container mt-5 mx-auto caja">
         <h3>UserList</h3>
        <table className="table">
          <thead>
            <tr>
            <th>Nombre </th>
            <th>Email</th>
            <th>Telefono</th>
            <th></th>
            </tr>
          </thead>

          <tbody>
            <Users data={this.state.data}/>
          </tbody>
        </table>
        <button onClick={this.Click} >
         OCULTAR
        </button>
     
      </div>
      )
   }else{
     return(
      <button onClick={this.Click} >
       MOSTRAR
     </button>
     )
   }
    
      
  }
 /*  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "miguel", email: "miguelghz@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  } */

  /* handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
    event.target.name.value= '';
    event.target.email.value='';
  }
 */
 /*  render() {
    console.log(this.state.users);
    return (
      <div className="App mx-auto" style={{textAlign:'center'}}>
        <div className="App-header">
          <h2>Bienvenido a React</h2>
        </div>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <UserList users={this.state.users}  />
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  } */
}

export default Main;