import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { getPosts } from '../../../actions/ApiCalls';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
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