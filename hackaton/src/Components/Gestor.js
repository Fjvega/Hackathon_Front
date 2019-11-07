import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import View from './View'
import '../CSS/Letras.css'
import '../CSS/Login.css'
import '../CSS/Gestor_layout.css'
import 'react-notifications/lib/notifications.css';


 
class Gestor extends Component {



constructor(props) {
    super(props);
      
        this.handleChange = this.handleChange.bind(this);
      }



state={
    username:'',password:'',visible:false,value:'',indice:0
}

changeIndex=(index)=>{
    this.setState({indice:index})
  }
handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;


    this.setState({[nam]: val});
    console.log(this.state)
  }

	render() {


        return(
            <div className="row">
                        <div className="column1">
                            <NavigationBar change={this.changeIndex}></NavigationBar>        
                        </div>
                        
                        <div className="column2">
                            <View indice={this.state.indice}></View>
                        </div>


            
            </div>

        )



    }
}

export default Gestor;  