import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogs = [
    {id: "1", name: "Alexei"},
    {id: "2", name: "Steven"},
    {id: "3", name: "Jose"},
    {id: "4", name: "Mario"},
    {id: "5", name: "Gustav"},
    {id: "6", name: "Jean"}
  ]

  let messages = [
    {id: "1", message: "Hi"},
    {id: "2", message: "Hello"},
    {id: "3", message: "What are you doing?"},
    {id: "4", message: "Hey"},
    {id: "5", message: "Yo"}
  ]

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
  
  let messagesElements = messages.map( m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;