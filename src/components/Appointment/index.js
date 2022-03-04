import "./styles.scss";
import React from "react";
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import Form from './Form'
import Status from './Status'
import Confirm from './Confirm'
import useVisualMode from "hooks/useVisualMode";
import PropTypes from 'prop-types';


export default function Appointment(props){
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = 'SAVING';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT'


console.log("props:",props)

const { interview, time, interviewers, bookInterview, id, cancelInterview } = props

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);

function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer,
  }
  transition(SAVING)
  bookInterview(id, interview).then(() => transition(SHOW))
}
const remove = id => {
  transition(SAVING)
  cancelInterview(id).then(() => transition(EMPTY))
}

const confirm = id => {
  transition(CONFIRM)
}
  return (
    <article className="appointment">
      <Header time={time} />
      
        {mode === EMPTY && <Empty onAdd={() => 
          transition(CREATE)} />}
        {mode === SHOW && (
        <Show
        {...interview}
        onEdit={() => transition(EDIT)}
        onDelete={() => confirm()}        
        />
      )}
      {mode === CREATE && (
        <Form 
        interviewers={interviewers}
        onSave={save}
        onCancel={() => back()}
        />
      )}
      {mode === SAVING && (
        <Status message={'SAVING...'} />
        
      )}
      {mode === CONFIRM && (
        <Confirm
          message={'Are you sure you would like to delete?'}
          onConfirm={() => remove(id)}
          onCancel={() => transition(SHOW)}
        />
      )}
       {mode === EDIT && (
        <Form interviewers={interviewers} 
        onSave={save} 
        onCancel={back} 
        student={interview.student} 
        interviewer={interview.interviewer.id} />
      )}
    </article>
  )
};