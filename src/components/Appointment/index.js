import "./styles.scss";
import React from "react";



export default function Appointment(props){
const {time} = props;


let outputString = 'No appointmnet';

if (time) {
  outputString = `Appoint at ${time}.`
}

return <article className="appointment">{outputString}</article>

};