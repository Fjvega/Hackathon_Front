import React, { Component } from 'react';
import '../CSS/Letras.css'
import '../CSS/NavigationBar.css'



 
class NavigationBar extends Component {



constructor(props) {
    super(props);

      }



state={
    username:'',password:'',visible:false,value:'',index:0
}


    render() 
    {   
 
        return(
        <div class="navbar_background">
            <div class="sparcing_navbar">
                 <img class="logo_navbar" src="./logo.svg" ></img>

                
                 <img  style={{marginTop:'70%'}} src="./SVG/001-upload.svg"  onClick={() => this.props.change(1)}></img>
                 <h3>
                     Subir archivos
                     
                 </h3>

                 <img  src="./SVG/002-feelings.svg"  onClick={() => this.props.change(2)}></img>
                 <h3>
                     Analisis de Sentimientos
                 </h3>

                 <img  src="./SVG/003-bar-chart.svg"  onClick={() => this.props.change(3)}></img>
                 <h3>
                     Estadisticas
                     
                 </h3>





                 <img  src="./SVG/LogOut.svg"  onClick={() => this.props.change(4)}></img>
                 <h3>             
                     Cerrar Sesión
                 </h3>

                 


            </div>
           
        </div>
        )
    }
}

export default NavigationBar;      