import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {

  const {interviewers, /*interviewer*/ value, /*setInterviewer*/ onChange} = props;

  const list = interviewers.map((item) => {
    return(
    <InterviewerListItem
    id = {item.id}
    key={item.id}
    name={item.name}
    avatar={item.avatar}
    selected={item.id === value}
    setInterviewer= {onChange}

    />
    )

  });

  return(
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{list}</ul>
</section>)
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};