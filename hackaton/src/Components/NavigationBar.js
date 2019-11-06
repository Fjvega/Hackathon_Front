import React, { Component } from 'react';
import '../CSS/Letras.css'
import '../CSS/NavigationBar.css'



 
class NavigationBar extends Component {



constructor(props) {
    super(props);

      }



state={
    username:'',password:'',visible:false,value:''
}


    render() 
    {   
    
        return(
        <div class="navbar_background">
            <div class="sparcing">
                 <img class="logo" src="./logo.svg" ></img>
                 <img  style={{marginTop:'20%'}}src="./SVG/Notifications.svg"></img>
                 <h3>
                     Notificaciones
                 </h3>

                 <img  style={{marginTop:'50%'}}src="./SVG/Home.svg"></img>
                 <h3>
                     Inicio
                 </h3>

                 <img  src="./SVG/Check_Book.svg"></img>
                 <h3>
                     <span style={{display:'block'}}>
                        Aprobaciones
                     </span>
                     <span style={{display:'block'}}>
                        Pendientes
                     </span>
                     
                     
                 </h3>

                 <img  src="./SVG/Group.svg"></img>
                 <h3>             
                     Colaboradores
                 </h3>
                 
                 <img  src="./SVG/Box.svg"></img>
                 <h3>             
                     Modulos
                 </h3>

                 <img  style={{width:'35%',marginTop:'50%'}}src="./SVG/man.svg"></img>
                 <h3>             
                     Perfil
                 </h3>

                 <img  src="./SVG/Settings.svg"></img>
                 <h3>             
                     Configuración
                 </h3>

                 <img  src="./SVG/LogOut.svg"></img>
                 <h3>             
                     Cerrar Sesión
                 </h3>

                 


            </div>
           
        </div>
        )
    }
}

export default NavigationBar;      