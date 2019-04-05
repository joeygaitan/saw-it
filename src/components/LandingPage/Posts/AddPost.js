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
        console.log(event.target.value)
        this.setState({
           [event.target.name] : event.target.value
        })
      }
      
      onSubmit = (event) => {
        event.preventDefault();
        this.props.AddPost(this.state)
      
        this.props.history.push('/posts')
      }

      refresh = () => {
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
                            <label>content</label>
                            <input name ="content" type="text" className="" value={this.state.content} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>title</label>
                            <input name ="title" type="text" className="" value={this.state.title} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>published</label>
                            <input name ="published" type="text" className="" value={this.state.published} onChange={this.onUpdate}></input>
                        </div>
        </form>
            <button onClick={()=>this.refresh()}>Cancel</button>
        </div> );
    }
}
 
export default withRouter(AddPost);