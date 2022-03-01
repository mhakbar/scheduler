import React from "react";
import Button from 'components/Button';//need to define Buttons or we will receive error "Button not defined"

export default function Confirm(props) {
  const {message, onConfirm, onCancel, time} = props;



return(
<main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">{props.message}</h1>
  <section className="appointment__actions">
    <Button onClick={props.onCancel} danger>Cancel</Button>
    <Button onClick={props.onConfirm} danger>Confirm</Button>
  </section>
</main>
)

};