import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props) {

  const {interviewers, value, setInterviewer} = props;

  const list = interviewers.map((items) => {
    return(
    <InterviewerListItem
    key={items.id}
    name={items.name}
    avatar={items.avatar}
    selected={items.id === value }
    setInterviewer= {() => setInterviewer(items.id)}

    />
    )

  });

  return(
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{list}</ul>
</section>)
}