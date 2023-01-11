import React from "react";
import Icon from "../images/Icon.png";

const ContactCard = (props) => {
   const {id, name, email } =  props.contact;
   return (
    <div className="item">
    <img className="ui avatar image" src={Icon} alt="Icon" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color: "red" ,float: "right"}}
            onClick={() => props.clickHander(id)}></i>
        </div>
    );
    };
   

export default ContactCard;
