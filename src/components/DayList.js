import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  const {days, day, setDay} = props;

  const currentDay = days.map((dayOfWeek) => {
    return(
    <DayListItem 
    key={dayOfWeek.id}
    name={dayOfWeek.name} 
    spots={dayOfWeek.spots} 
    selected={dayOfWeek.name === props.day}
    setDay={dayOfWeek.setDay}  
  />
    )
  });



return <ul>{currentDay}</ul>  
}

