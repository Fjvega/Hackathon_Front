import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../CSS/Letras.css'
import '../CSS/Register.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var md5 = require('md5');

 
class Register extends Component {


componentDidMount()
{

    var json = require('../colombia.json'); //(with path)  
    var lista =[]
    for (let i = 0; i < json.length; i++) {
         console.log(json[i].departamento);
        lista.push(json[i].departamento)
      }

    this.setState({list:lista})
}
constructor(props) {
    super(props);
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



state={
    nit:'',nombreEmpresa:'',nombrePersona:'',departamento:'',celular:'',username:'',password:'',visible:false,value:'',list:[],cluster:''
}
handleSubmit(event)
{   
    event.preventDefault();

    let data= JSON.stringify({'token':md5(this.state.email),'name':this.state.nombrePersona,'departamento':this.state.departamento,'email':this.state.email,'password':md5(this.state.password),'nit':this.state.nit,'representante':this.state.nombrePersona,'cluster':this.state.cluster,'cellphone':this.state.celular})

    console.log(data.email)
    
    fetch('http://35.193.232.165:5000/register', {
        method: 'POST',
        body: data,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json',
          }
      }).then((response) => response.json())
      .then((responseJson) => {

       
        console.log(responseJson['Estado'])

        if(responseJson['Estado']==='Success')
        {
            NotificationManager.success('Success message', 'Registro Exitoso');
            this.setState({visible:true})
        }else{
            NotificationManager.error('Error message', 'Registro Fallido');
        }
    
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
                    <div>

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
                                                    <select className="form_input_register" id="selector" placeholder="Departamento" type="text" name="departamento" value={this.state.departamento} onChange={this.handleChange}>
                                                        {this.state.list.map((h, i) => 
                                                                (<option key={i} value={h}>{h}</option>))
                                                            }
                                                    </select>
                                                    <input className="form_input_register" placeholder="Celular/Telefono" type="text" value={this.state.celular} name="celular" onChange={this.handleChange}></input>
                                                    <input className="form_input_register" placeholder="Cluster" type="text" value={this.state.cluster} name="cluster" onChange={this.handleChange}></input>

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
        }else{

            return(
                <Redirect to='/Login'/>
            )
        }
    }
}

export default Register;                           