import React, { useState } from "react";

const InputForm = (props) => {
  let [name, setName] = useState("");


  function handleClick() {
    let newContact = {
      name,
      id: Date.now(),
    };
      
    props.handleNewContact(newContact);
    setName("");
}
    
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={name}
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
};

export default InputForm;

     
