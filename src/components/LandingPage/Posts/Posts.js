import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { getPosts } from '../../../actions/ApiCalls';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Admin: false,
            username: ''
         }
    }

    componentDidMount = () => {
        this.props.getPosts()
        this.isAdmin()
        this.userName()
    }

    isAdmin = () => {
        let fakeToken = localStorage.getItem('Admin')

        if(fakeToken === 'true'){
            this.setState({
                Admin: true
            })
        }
    }

    userName = () =>{
        let username = localStorage.getItem('username')

        this.setState({
            username
        })
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.Admin ? "Admin": "hello"}</h1>
                {this.props.posts.map(post=>{
                    return <p>{post.title}</p>
                })}
            </div>
         );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.all
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getPosts: getPosts
    }, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps)(Posts);