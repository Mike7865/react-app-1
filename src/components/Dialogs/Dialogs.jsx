import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return <div className={s.dialog + " " + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>;
}

const Message = (props) => {
return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Alexei" id="1" />
        <DialogItem name="Steven" id="2" />
        <DialogItem name="Jose" id="3" />
        <DialogItem name="Mario" id="4" />
        <DialogItem name="Gustav" id="5" />
        <DialogItem name="Jean" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="What are you doing?" />
        <Message message="Hey" />
        <Message message="Yo" />
      </div>
    </div>
  )
}

export default Dialogs;