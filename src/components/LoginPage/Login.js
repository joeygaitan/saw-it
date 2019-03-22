import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import {userLogin} from '../../actions/LoginActions'
import '../../css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
    <div className="main">
        <p className="sign" align="center">Sign in</p>
        <form className="form1">
            <input className="un" type="text" align="center" placeholder="Username"/>
            <input className="pass" type="password" align="center" placeholder="Password"/>
            <a className="submit" align="center">Sign in</a>
        </form>
    </div>
        
        )
    }
}

const mapStateToProps = state => ({
    loginAuth: state.login
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      userLogin: userLogin
    }, dispatch)  
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);