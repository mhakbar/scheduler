
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors';
import useVisualMode from "hooks/useVisualMode";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];

export default function Application(props) {
  
  // const [value, onChange] = useState('Monday');
  // console.log(value);
  // const [days, setDays] = useState([]);  
  const [state, setState] = useState({ 
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  let dailyAppointments = [];
  
  // getAppointmentsForDay(state, state.day)
  // dailyAppointments.map(appointment => ());


  const setDay = day => setState({...state, day});
  // const setDays = days => setState(prev => ({...prev, days}));



  const GET_DAYS = "http://localhost:8001/api/days";
  const GET_APPOINTMENTS = "http://localhost:8001/api/appointments";
  const GET_INTERVIEWERS = "http://localhost:8001/api/interviewers";
  

  // useEffect(() => {
  //   axios.get(`${baseURL}days`)
  //   .then((response) => {
  //     console.log(response.data);
  //     setDays(response.data);
  //   })
  //   .catch((err) => {
  //     console.log('Error: ', err);
  //   })
  //     .then((response) => setDays(response.data))
  //     .catch((err) => {
  //       console.log('Error: ', err);
  //     })
  // }, [])

  useEffect(() => {
    Promise.all([
      axios.get(`${GET_DAYS}`), 
      axios.get(`${GET_APPOINTMENTS}`),
      axios.get(`${GET_INTERVIEWERS}`)
    ]).then((all) => {
      setState(prev => ({
              ...prev,
              days: all[0].data,
              appointments: all[1].data,
              interviewers: all[2].data,
    }))
    console.log("response : ", all);
  })
  }, [])

  dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  const parsedAppointment = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview)
          return(
    <Appointment key={appointment.id} 
    id={appointment.id} 
    time={appointment.time} 
    interview={interview}
    interviewers={dailyInterviewers}/>
          );
  });


  // const days = [
  //   {
  //     id: 1,
  //     name: "Monday",
  //     spots: 2,
  //   },
  //   {
  //     id: 2,
  //     name: "Tuesday",
  //     spots: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Wednesday",
  //     spots: 0,
  //   },
  // ];
  return (
    
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler"/>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList days={state.days} value={state.day} 
        onChange={setDay}/>


        </nav>
        <img className="sidebar__lhl sidebar--centered"  src="images/lhl.png" alt="Lighthouse Labs"/>
        </section>
      <section className="schedule">
        {parsedAppointment}
        {/* <Appointment key="last" time="5pm" /> */}
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
