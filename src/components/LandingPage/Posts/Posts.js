import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Header from '../../HigherOrderComponents/Header'
import { connect} from 'react-redux';
import { getPosts, addPost, getComments, addComment, increaseVote, descreaseVote } from '../../../actions/ApiCalls';
import '../../../css/Posts.css'
import AddPost from './AddPost'
import moment from 'moment';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Admin: false,
            username: '', 
            addPost: false,
            showMessages: false,
            commentBody:{
                body:""
            }
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

        if(fakeToken === 'true'){
            console.log('inside fakeToken');
            
            this.setState({
                Admin: true
            })
        }
    }

    userName = () => {
        let username = localStorage.getItem('username')
        this.setState({
            username
        })
    }

    addComments = (comment) => {

    }
    
    addNewPost = () =>{
        console.log('here')
        let value = this.state.addPost
        this.setState({
            addPost: !value
        })
    }

    render() {
        return ( 
            <div>
                <Header username={this.state.username}/>
                <div className="container">
                <div className='buttonContainer'>
                <button className="latestButton">Latest Posts</button>
                <button className="addButton" onClick={()=>this.addNewPost()}>{this.state.addPost ? "Cancel Adding Post" : "Add Post"}</button>
                {this.state.addPost ? <AddPost addPost={this.props.addPost}/>: null}
                </div>
                
                    {this.props.posts.map((post,index)=>{
                        return (<div className='item'>
                        <img src={post.img_url}/>
                        <h1>{post.title} | <img src="../svgs/up-arrow.svg" onClick={()=>this.props.increaseVote(post.id)}/> {post.votes} {post.votes > 0 ?<img src="../../../images/svgs/arrow-down-sign-to-navigate.svg" onClick={()=>this.props.descreaseVote(post.id)}/>: null}</h1>
                        <p>{post.content}</p>
                        <ul>
                        {this.props.comments.map((comment, ind) => { return ind === index? <li>{comment.content}</li> : null })}
                        </ul>
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
      getPosts: getPosts,
      addPost: addPost,
      getComments: getComments,
      addComment: addComment,
      increaseVote: increaseVote,
      descreaseVote: descreaseVote
    }, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps)(Posts);