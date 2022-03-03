import React, { useState } from 'react';
import InterviewerList from "/Users/macbar/Documents/LHL/second_try/w6/scheduler/src/components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const {student, interviewer, interviewers, onSave, onCancel, time, bookInterview} = props;

  const [studentName, setStudentName] = useState(props.student || "");
  const [currentInterviewer, setCurrentInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudentName('')
    setCurrentInterviewer('')
  }

  const cancel = () => {
    reset()
    onCancel()
  }
  
return(
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        /*
          This must be a controlled component
          your code goes here
        */
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
      />
    </form>
    <InterviewerList 
      /* your code goes here */
      interviewers={interviewers}
      value={currentInterviewer}
      onChange={setCurrentInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={() => onSave(studentName, currentInterviewer)}>Save</Button>
    </section>
  </section>
</main>
)};