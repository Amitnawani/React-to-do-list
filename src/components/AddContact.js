import React from "react";
import "./List.css";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };
    
    add = (e) => {
           if(this.state.name === "" || this.state.email === ""){
            alert("All the Fields are Mandatory!");
            return;
           }
           this.props.addContactHandler(this.state);
    };
    render() { 
        return (
           <div className="ui main">
           <div className="main">
           <h2 className="heading">Add Contact
           <Link to="/contact">
           <button className="Button1">Contact List</button>
           </Link>
           </h2>
           </div>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={this.state.value} onChange={ (e) => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={this.state.value} onChange={ (e) =>this.setState({email: e.target.value})}/>    
                </div>
                <button className="ui button blue">Add</button>
            </form>
           </div>
        )
    }
}

export default AddContact;