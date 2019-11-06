import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../CSS/Letras.css'
import '../CSS/Register.css'

 
class Register extends Component {



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
                       


                            <div className="row_register">
                                <div className="column_register">
                                    <div className="sparcing">
   
                                         
                                    </div>
                                    
                                </div>
                                
                                <div className="column">

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