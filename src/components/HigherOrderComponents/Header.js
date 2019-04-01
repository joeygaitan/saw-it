import React, { Component } from 'react';
import '../../css/Header.css';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('Admin')

        this.props.history.push('/')
    }

    render() { 
        return (
        <div class="topnav">
            <h1>Welcome, {this.props.username}!</h1>
            
            <p onClick={this.logout}>Logout</p>
        </div>
          );
    }
}
 
export default withRouter(Header);