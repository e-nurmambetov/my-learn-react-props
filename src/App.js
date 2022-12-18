import React, {useState} from 'react';
import ContactList from './components/ContactList/ContactList';
import AddConatct from './components/AddContact/AddContact';

const App = () => {
  let [contact, setContact] = useState([]);

  function handleNewContact(newContact) {
    let newContactsArray = [...contact];
    newContactsArray.push(newContact);
    setContact(newContactsArray);
  }
  // console.log(contact)
  return (
    <div>
      <AddConatct 
      handleNewContact={handleNewContact} 
      />
      <ContactList 
      contact={contact}
      />
    </div>
  );
};

export default App;