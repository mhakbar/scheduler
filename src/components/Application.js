
import React, { useEffect } from 'react'
import axios from 'axios';
import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from 'helpers/selectors';
import useVisualMode from "hooks/useVisualMode";
import useApplicationData from 'hooks/useApplicationData';
import PropTypes from 'prop-types';


export default function Application(props) {
 
  const {
    state,
    setState,
    bookInterview,
    cancelInterview,
    setDay,
  } = useApplicationData()

  let dailyAppointments = [];
  dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const GET_DAYS = "/api/days";
  const GET_APPOINTMENTS = "/api/appointments";
  const GET_INTERVIEWERS = "/api/interviewers";
  


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
  })
  }, [setState])


  const parsedAppointment = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview)
          return(
    <Appointment key={appointment.id} 
    id={appointment.id} 
    time={appointment.time} 
    interview={interview}
    interviewers={dailyInterviewers}
    bookInterview={bookInterview}
    cancelInterview={cancelInterview}
    />
    )
  })

  return (
    
    <main className="layout">
      <section className="sidebar">
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
        <Appointment key="final" time="5pm"/>
      </section>
    </main>
  );
}
