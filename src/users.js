import React from 'react';
import User from './user';

class Users extends React.Component{
  render(){
  return( 
              this.props.data.map(row=>
                <User  key={row.id} row={row} showUser={this.props.showUser}/>    
       )
    )
  }
}


export default Users;