import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Header from '../../HigherOrderComponents/Header'
import { connect} from 'react-redux';
import { getPosts, getComments } from '../../../actions/ApiCalls';
import '../../../css/Posts.css'


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDate: new Date(),
            Admin: false,
            username: '',
            posts: [...this.props.posts],
            addPost: false,
            showMessages: false
         }
    }

    componentDidMount = () => {
        this.props.getPosts()
        this.props.getComments()
        this.isAdmin()
        this.userName()
    }

    searchBar = () =>{

    }

    latest = () => {
        
    }

    isAdmin = () => {
        let fakeToken = localStorage.getItem('Admin')

        console.log('inside is Admin');
        

        if(fakeToken === 'true'){
            console.log('inside fakeToken');
            
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

    postComments = () => {

    }

    postVotes = () => {
        
    }

    render() { 
        console.log(this.props.posts, this.state.username);
        
        return ( 
            <div>
                <Header username={this.state.username}/>
                <div className="container">
                <div className='buttonContainer'>
                <button className="latestButton">Latest Posts</button>
                <button className="addButton">Add Post</button>
                </div>
                
                    {this.state.posts.map((post, id)=>{
                        return (<div className='item'>
                        <h1>{post.title}|<button></button>{}</h1>
                        <img src={post.img_url}/>
                        <p>{post.content}</p>
                        </div>)
                    })}
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.all, comments: state.comments.allComments
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      getPosts: getPosts, getComments: getComments
    }, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps)(Posts);