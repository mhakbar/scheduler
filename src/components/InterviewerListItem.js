import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

 const {id, name, avatar, selected, setInterviewer} = props;
 
// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };

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