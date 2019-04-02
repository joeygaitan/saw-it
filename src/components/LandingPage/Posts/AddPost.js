import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                author: "",
                content:"",
                title: "",
                img_url: ""
         }
    }

    change = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
      }
      
      onSubmit = (event) => {
        event.preventDefault();
        this.props.AddPost(this.state)
      
        this.props.history.push('/posts')
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
                            <label>SubTitle</label>
                            <input name ="subtitle" type="text" className="" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>author</label>
                            <input name ="author" type="text" className="" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>published</label>
                            <input name ="published" type="text" className="" value={this.state.published} onChange={this.onUpdate}></input>
                        </div>
        </form>
            <Link to='/books'><button>Cancel</button></Link>
        </div> );
    }
}
 
export default AddPost;