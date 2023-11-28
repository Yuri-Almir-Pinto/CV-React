import "./ChatArea.css";
import { useState } from "react";

function Input(props) {
  const {value, handler} = props;
  return (
    <input
          type="text"
          value={value}
          onChange={handler}/>
  )
}

function TextArea(props) {
  const {firstName, lastName} = props;
  const fullName = `${firstName} ${lastName}`
  return (
    <p>
      Olá, {fullName}.
    </p>
  )
}

function ChatArea( ) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handler(e, setter) {
    setter(e.target.value);
  }

  return (
    <div className="chat-area">
        <Input
        value={firstName}
        handler={(e) => {handler(e, setFirstName)}}/>
        <Input
        value={lastName}
        handler={(e) => {handler(e, setLastName)}}/>
        <TextArea
        firstName={firstName}
        lastName={lastName}/>
    </div>
  );
}



export { ChatArea }
