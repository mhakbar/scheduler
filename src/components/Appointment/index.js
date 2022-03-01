import "./styles.scss";
import React from "react";
import Header from './Header'
import Show from './Show'
import Empty from './Empty'



export default function Appointment(props){
// const {time} = props;


// let outputString = 'No appointmnet';

// if (time) {
//   outputString = `Appoint at ${time}.`
// }
console.log("props:",props)

const { interview, time } = props

  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? (
        <Show
        student = {interview.student} 
        interviewer = {interview.interviewer}
        
        />
      ) : (
        <Empty />
      )}
    </article>
  )

// return <article className="appointment">{outputString}</article>

};