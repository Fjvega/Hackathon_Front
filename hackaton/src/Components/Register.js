import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../CSS/Letras.css'
import '../CSS/Register.css'



var md5 = require('md5');

 
class Register extends Component {



constructor(props) {
    super(props);
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



state={
    nit:'',nombreEmpresa:'',nombrePersona:'',departamento:'',celular:'',username:'',password:'',visible:false,value:''
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
                       


                            <div className="row_register">
                                <div className="column_register">
                                    <div className="sparcing_register">
                                    <img className="logo_register" src="./Logo.svg" ></img>
                                    <h1>
                                        Registro de empresa
                                    </h1>
   
                                         
                                    </div>
                                    
                                </div>
                                
                                <div className="column_register2">
                                    <div className="sparcing_register">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row_register">
                                                <div className="column_fields">
                                                    <h3 className="form_title">No. de identificación-NIT</h3>
                                                    <input className="form_input_register" placeholder="00000000000" type="text" value={this.state.nit} name="nit" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Nombre de la empresa" type="text" value={this.state.nombreEmpresa} name="nombreEmpresa" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Nombre del representante legal" type="text" value={this.state.nombrePersona} name="nombrePersona" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Departamento" type="text" value={this.state.departamento} name="departamento" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Celular/Telefono" type="text" value={this.state.celular} name="celular" onChange={this.handleChange}></input>
                                                </div>

                                                <div className="column_fields">
                                                    <input  style={{marginTop:"9%"}}className="form_input_register" placeholder="Email" type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Contraseña" type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
                                                </div>
                                            </div>
                                            
                                                 <input className="button_register" type="submit" value="Registro" />
                                        </form>
                                    </div>
                                </div>
                            </div>


                       
                        </body>
                        
                        
                        


                    </div>
                )
        }
    }
}

export default Register;                           