import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const {student, interviewer, interviewers, onSave, onCancel} = props;

  const [studentName, setStudentName] = useState(student || "");
  const [error, setError] = useState('');
  const [currentInterviewer, setCurrentInterviewer] = useState(interviewer || null);

  const reset = () => {
    setStudentName('');
    setCurrentInterviewer('');
    setError('');
  }

  const cancel = () => {
    reset();
    setError('');
    onCancel();
  }

  const validate = (student, interviewer) => {
  
      if (student === "") {
        return setError('Student name cannot be blank') 
    }

    console.log("Interviewer in form.js is :", interviewer);

    if (!interviewer) {
      return setError('Interviewer must be selected') 
    }
    setError('');
    onSave(student, interviewer);
  };
  console.log(studentName);
return(
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="student"
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={event => setStudentName(event.target.value)}
        data-testid="student-name-input"
      />
    </form>
    <section className="appointment__validation">
          {error}
    </section>
    <InterviewerList 
      interviewers={interviewers}
      value={currentInterviewer}
      onChange={setCurrentInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={() => validate(studentName, currentInterviewer)}>Save</Button>
    </section>
  </section>
</main>
)};