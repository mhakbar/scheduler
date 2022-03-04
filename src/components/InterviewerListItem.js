import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

 const {id, name, avatar, selected, setInterviewer} = props;
 
const interviewerClass = classNames('interviewers__item',{
  
  
  'interviewers__item--selected': selected
});


return (
  <li onClick= {() => setInterviewer && setInterviewer(id)} className={interviewerClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.name && props.selected }
</li>
);

};