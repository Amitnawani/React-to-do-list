import React from "react";
import ContactCard from "./ContactCard";
import "./List.css";
import { Link } from "react-router-dom";


console.log("hello");
const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    
    const renderContactList = props.contacts.map((contact) => {
    return (
        <ContactCard contact={contact} 
        clickHander = {deleteContactHandler}
        key={contact.id} />
    );
    });
    return (
        <div className="main">
            <h2>
                Contact List
            <Link to="/add">
                <button className="Button2">Add Contact</button>
            </Link>    
            </h2>
            <div className="ui called list">{renderContactList}</div>
        </div>

    )
    };

export default ContactList;  