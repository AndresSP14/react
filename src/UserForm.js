import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <div style={{width:'400px'}} className="mx-auto">
          <form onSubmit={this.props.onAddUser}>
          <div className="form-group">
            <input type="text" placeholder="Nombre" name="name" className="form-control" />
          </div>
          <div className="form-group">  
            <input type="email" placeholder="Email" name="email" className="form-control" />
          </div>
          <input className="btn btn-success" type="submit" value="Guardar" />
      </form>
      </div>
    );
  }
}