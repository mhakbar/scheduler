import "./styles.scss";
import React from "react";
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props){
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
// const {time} = props;


// let outputString = 'No appointmnet';

// if (time) {
//   outputString = `Appoint at ${time}.`
// }
console.log("props:",props)

const { interview, time } = props

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

  return (
    <article className="appointment">
      <Header time={time} />
      {/* {interview ? ( */}
        {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
        {mode === SHOW && (
        //   <Show
        //     student={props.interview.student}
        //     interviewer={props.interview.interviewer}
        //   />
        // )}
        <Show
        student = {interview.student} 
        interviewer = {interview.interviewer}
        onEdit={() => console.log('clicked onEdit')}
        onDelete={() => console.log('clicked onDelete')}        
        />
      // {/* ) : (
      //   <Empty /> */}
      )}
    </article>
  )

// return <article className="appointment">{outputString}</article>

};