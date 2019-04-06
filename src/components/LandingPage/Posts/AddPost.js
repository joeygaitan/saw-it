import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                author: "",
                content:"",
                title: "",
                img_url: "",
                empty: true
         }
    }

    onUpdate = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
      }
      
      onSubmit = (event) => {
        event.preventDefault();
        this.props.AddPost(this.state)
      
        this.props.history.push('/posts')
      }

      ifEmpty = () => {
        if(this.state.author === "" || this.state.content === '' || this.state.title === '' || this.state.img_url === ''){
            
        }else{
            this.setState({
                empty: false
            })
        }
      }

    render() { 
        console.log(this.props)
        return ( 
        <div className="">
            <form className="form" onSubmit={this.updatedSubmit}>
                            <div className="">
                                <label className>Author</label>
                                <input name ="author" type="text" className="" value={this.state.author} onChange={this.onUpdate}></input>
                            </div>
                            <div className="">
                                <label>Description</label>
                                <input name ="content" type="text" className="" value={this.state.content} onChange={this.onUpdate}></input>
                            </div>
                            <div className="">
                                <label>Title</label>
                                <input name ="title" type="text" className="" value={this.state.title} onChange={this.onUpdate}></input>
                            </div>
                            <div className="">
                                <label>Image Url</label>
                                <input name ="img_url" type="text" className="" value={this.state.img_url} onChange={this.onUpdate}></input>
                            </div>
                            {this.state.empty ? <button className="clearedOut" disabled>Create New Post</button> : <button type="submit" className="">Create New Post</button>}
            </form>
        </div> );
    }
}
 
export default withRouter(AddPost);