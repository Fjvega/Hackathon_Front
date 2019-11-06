import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../CSS/Letras.css'
import '../CSS/Login.css'

var md5 = require('md5');
 
class Login extends Component {



constructor(props) {
    super(props);
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



state={
    username:'',password:'',visible:false,value:''
}
handleSubmit(event)
{   
    event.preventDefault();

    let data= JSON.stringify({'username':this.state.username,'password':md5(this.state.password)})

    console.log(data)
    this.setState({visible:true})
    
    fetch('http://127.0.0.1:5000/login', {
        method: 'PUT',
        body: data,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json',
          }
      }).then((response) => response.json())
      .then((responseJson) => {

       
        console.log(responseJson['data'])
        this.setState({value:responseJson['data'].username},this.setState({visible:true}))


    
    }
    
    )
      .catch((error) => {
       
        console.error(error);
  
      });
    
}
handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;


    this.setState({[nam]: val});
    console.log(this.state)
  }

	render() {


        if(this.state.visible==false)
        {
                return(
                    <div >

                        <body>
                       


                            <div className="row">
                                <div className="column">
                                    <div className="sparcing">
                                        <img className="logo" src="./Logo.svg" ></img>
                                        <h1>
                                            <span className="salto_linea">Bienvenido</span> 
                                            <span className="salto_linea">a Scouta</span> 
                                            
                                        </h1>
                                        <h2>
                                            <span className="salto_linea">Visualiza.</span> 
                                            <span className="salto_linea">Compara.</span>
                                            <span className="salto_linea">Planea.</span> 
                                        </h2>
                                        <form onSubmit={this.handleSubmit}>
                                            <input className="form_input" placeholder="Correo" type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
                                            <input className="form_input" placeholder="Contraseña" type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
                                            <input className="button_login" type="submit" value="Iniciar Sesión" />
                                        </form>
                                         <h3>
                                             ¿No tienes cuenta?,<a href="/Register">Registrate</a> 
                                         </h3>
                                    </div>
                                    
                                </div>
                                
                                <div className="column">

                                <img className="image_left" src="./isotipo.svg"></img>
                                </div>
                            </div>


                       
                        </body>
                        
                        
                        


                    </div>
                )
        }else{

            return(
                <Redirect to='/Register'/>
            )
        }
    }
}

export default Login;                           