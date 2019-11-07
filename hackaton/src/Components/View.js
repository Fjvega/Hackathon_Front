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
      }



state={
    username:'',password:'',visible:false,value:''
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
            return(

                <div className="background_archivo">
                     
                </div>
            )
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

                <div className="background_archivo">
                     
                </div>
            )
        }





    }
}

export default View;  