import React, { Component } from 'react';
import '../CSS/Letras.css'
import '../CSS/Resumen.css'
 
class Resumen extends Component {



constructor(props) {
    super(props);

      }



state={
    username:'',password:'',visible:false,value:''
}


    render() 
    {   
        return(

        <div className="row">
            <div className="column">
            <div className="sparcing_text">
            <h1>
                Bienvenido, -Inserte Nombre-
            </h1>

            <h2>
                    <span style={{display:'block'}}>
                        Recuerda que la información encontrada en Lemon es
                     </span>
                     <span style={{display:'block'}}>
                        clasificada como "<strong>información Sensible</strong>"
                    </span>
            </h2>

            <h2>
                    <span style={{display:'block'}}>
                        Recuerde la política de datos que maneja Carvajal S.A, y todas
                     </span>
                     <span style={{display:'block'}}>
                        las consecuencias que lleva su uso indebido.
                    </span>
            </h2>

            <h2>
                    <span style={{display:'block'}}>
                        Todas las acciones dentro de esta aplicación <strong> están siendo</strong>
                     </span>
                     <span style={{display:'block'}}>
                        <strong>auditadas con esta información</strong>
                    </span> 
            </h2>

            <div className="round_info">

                <div className="row">
                        <div className="column">
                            <h2>
                                -Inserte Nombre aquí-
                            </h2>   
                        </div>
                        <div className="column">
                             <h2>
                                 -Inserte cargo aquí-
                             </h2>
                        </div>

                        <h2>
                            -Ponga su correo aquí-
                        </h2>
                         <h2>
                             -Colocar tipo de ingreso-
                         </h2>
                </div>
              
            </div>

            <div className="process_scroll">
                <div className="sparcing_text">
                        <h2>
                            Proceso de selección
                        </h2>
                        <h3>
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                            test<br />
                        </h3>
                </div>

                
            </div>
        </div>
            </div>

            <div className="column">
                
            </div>


        
        
        </div>

        )
    }
}

export default Resumen;                           