import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  const {days, value, onChange} = props;

  const currentDay = days.map((dayOfWeek) => {
    return(
    <DayListItem 
    key={dayOfWeek.id}
    name={dayOfWeek.name} 
    spots={dayOfWeek.spots} 
    selected={dayOfWeek.name === value}
    setDay={onChange}  
  />
    )
    
  });



return <ul>{currentDay}</ul>  
}

