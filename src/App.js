import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import UserList from './UserList';
//import UserForm from './UserForm';
//var arrayPersonas = require('./personas.json');
import datos from './personas.json';
import Users from './users';
import Error from './404';
import Perfil from './perfil';




class App extends Component {
  constructor(){
    super();
    this.state={
      data:datos, 
      user:[],
   

    };
  }
   
   showUser = async (id, nombre, email, telefono, img, descrip) =>{
   const perfilUser = {
      id : id,
       nombre : nombre,
       email : email,
      telefono : telefono,
      img:img,
      descrip:descrip
    }
    
    await this.setState({user: perfilUser});
     console.log(this.state.user) 
  } 

 
  
  render(){
    return(
      <div className="caja">
         <Router>

              <Link to="/">HOME</Link>
            
            

              <Switch>
                  <Route path={"/perfil/"+ this.state.user.nombre+this.state.user.id} render={()=> {
                    return(
                    <div>
                      <Perfil user={this.state.user}></Perfil>
                    </div>
                    )
                  }}></Route>

                  <Route exact path="/" render={()=>{

                      return (
                        <div className="container mt-5 mx-auto caja">
                  <h3>UserList</h3>
    
                  <Users data={this.state.data} showUser={this.showUser} />
      </div>
            )
           }}>

           </Route>

           <Route component={Error}/>

              </Switch>
          </Router>
      </div>
    )
   

    
  
   
    
      
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

export default App;