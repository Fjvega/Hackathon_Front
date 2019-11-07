import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import '../CSS/Letras.css'
import '../CSS/Login.css'
import '../CSS/View.css'
import '../CSS/Gestor_layout.css'
import 'react-notifications/lib/notifications.css';


 
class View extends Component {



constructor(props) {
    super(props);
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

      }



state={
    username:'',file: null,
    password:'',visible:false,value:'', details:{'porCeldasVacias':0,'porFilasVacias':0,'numCeldasVacias':0,'numColVacias':0
    ,'numDatosCorr':0,'numDatosMixtos':0,'numFilasRepetidas':0,'texto':[ ]}
}


handleSubmit(event)
{   
    event.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    console.log("si llegue al send")
    
    fetch('http://35.193.232.165:5000/enviar', {
        method: 'POST',
        body: data,
        headers:{
            'Access-Control-Allow-Origin': '*',
          }
      }).then((response) => response.json())
      .then((responseJson) => {

       
        let convert = parseFloat(responseJson.porFilasVacias)*100;
        let porceldas=parseFloat(responseJson.porCeldasVacias)
        this.setState({details:{'porCeldasVacias':porceldas,'porFilasVacias':convert,'numCeldasVacias':responseJson.numCeldasVacias,'numColVacias':responseJson.numColVacias,
        'numDatosCorr':responseJson.numDatosCorr,'numDatosMixtos':responseJson.numDatosMixtos,'numFilasRepetidas':responseJson.numFilasRepetidas,
        'numFilasVacias':responseJson.numFilasVacias,'texto':responseJson.texto}},this.setState({visible:true}))


    
    }
    
    )
      .catch((error) => {
       
        console.error(error);
  
      });
    
}

onChange(e) {

    let files = e.target.files;

    this.setState({
        file: files

    })





}

handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;


    this.setState({[nam]: val});
    console.log(this.state)
  }

	render() {

        


        if(this.props.indice==0)
        {
            return(

                <div className="background_home">
                     
                </div>
            )
        }

        if(this.props.indice==1)
        {
            if(this.state.visible==true)
            {
                return(
                  <div className="background_feedback">
                        <div className="row forcing_center">
                            <div className="column">
                                        <h3 className="listDetails">
                                            Número de celdas vacias : {this.state.details.numCeldasVacias}
                                        </h3>
                                        <h3 className="listDetails">
                                            Número de columnas vacias : {this.state.details.numColVacias}
                                        </h3>
                                        <h3 className="listDetails">
                                            Número de datos mixtos : {this.state.details.numDatosMixtos}
                                        </h3>
                                        <h3 className="listDetails">
                                            Número de celdas de filas repetidas : {this.state.details.numFilasRepetidas}
                                        </h3>
                                        <h3 className="listDetails">
                                            Número de filas vacias : {this.state.details.numFilasVacias}
                                        </h3>
                            </div>
                            <div className="column">
                                    <h5 className="text">
                                        <ul>
                                            <li>
                                                {this.state.details.texto[0]+"."+this.state.details.texto[1]+"."}
                                            </li>
                                            <li>
                                                {this.state.details.texto[2]+"."}
                                            </li>
                                            <li>
                                                {this.state.details.texto[3]+"."+this.state.details.texto[4]+"."}
                                            </li>
                                            <li>
                                                {this.state.details.texto[5]+"."}
                                            </li>
                                            <li>
                                                {this.state.details.texto[6]+"."+this.state.details.texto[7]+"."}
                                            </li>

                                        </ul>
                                    </h5>
                            </div>
                        </div>
                    </div>

    
                )
            }else
            {
            return(

                <div className="background_archivo">
                    <div className="forcing_center_max">
                       <form onSubmit={this.handleSubmit}>
                           <h1>Escoger archivo</h1>
                                <div className="btn">
                                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" id="fileinput" name="file_input" multiple="multiple" onChange={(e) => this.onChange(e)} />
                                    <input className="button_register" type="submit" value="Subir Archivo" />

                                </div>
                       </form>
                    </div>
                </div>

            )
            }
        }
        if(this.props.indice==2)
        {
            return(

                <div className="background_grafica">
                     
                </div>
            )
        }

        if(this.props.indice==3)
        {
            return(

                <div className="background_grafica2">
                     
                </div>
            )
        }

        if(this.props.indice==4)
        {
            return(

                <Redirect to='/Login'/>

            )
        }





    }
}

export default View;  