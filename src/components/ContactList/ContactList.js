import React from "react";

const ContactList = ({contact}) => {

  return (
    <div>
      {contact.map((item, index) => (
        <ul key={'index-' +index}>
          <li>Name: {item.name}</li>
        </ul>
        ))}
    </div>
  );
};

export default ContactList;
          
 

