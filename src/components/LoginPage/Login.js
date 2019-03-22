import React, { Component } from 'react';
import '../../css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Admin: [{username: "Admin", password: "123"},{Admin: false}],
            User: ''
        }
    }
    
    isAdmin = () => {
        if (this.state.User === this.state.Admin[0].username && this.state.Admin[0].password === '123'){
            localStorage.setItem('Admin', 'true')
            localStorage.setItem('username', 'Admin')
        }else{
            localStorage.setItem('username', this.state.User)
        }
    }

    change = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
      }
      
      onSubmit = (event) => {
        event.preventDefault();
      
        this.props.history.push('/Posts')
      }

    render() { 
        return ( 
        <div className="main">
            <h1 style={{textAlign: "center", marginTop:"50%",paddingTop: "30px", marginBottom: "-20px"}}>Saw-it</h1>
            <p className="sign" align="center">Sign in</p>
            <form className="form1" onSubmit={this.onSubmit}>
                <input className="un" type="text" align="center" placeholder="Username" onChange={this.change}/>
                <input className="pass" type="text" align="center" placeholder="Password" onChange={this.change}/>

                <button type="submit" className="submit" align="center">Sign in</button>
            </form>
        </div> 
        )
    }
}


  
  
 
export default Login;