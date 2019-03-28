import React, { Component } from 'react';
import '../../css/Header.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logout = () => {
        localStorage.removeItem('username')
        localStorage.setItem('Admin', 'false')

        this.props.history.location.push()
    }

    render() { 
        return (
        <div class="topnav">
            <p>Welcome, {this.props.username}!</p>
            
            <p onClick={this.logout}>Logout</p>
        </div>
          );
    }
}
 
export default Header;