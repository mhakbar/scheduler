import { useState } from 'react'
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  })
  const setDay = day => {
    setState({ ...state, day })
  }

const bookInterview = (id, interview) => {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview },
  }
  const appointments = {
    ...state.appointments,
    [id]: appointment,
  }
  const days = updateSpots(id, appointments);

  return axios
    .put(`/api/appointments/${id}`, { interview })
    .then(() => {
      setState(prev => {
        return { ...prev, appointments }
      })
    })
}

const cancelInterview = id => {
  const appointment = {
    ...state.appointments[id],
    interview: null,
  }
  const appointments = {
    ...state.appointments,
    [id]: appointment,
  }

  const days = updateSpots(id, appointments)

  return axios
    .delete(`/api/appointments/${id}`)
    .then(() => {
      setState(prev => {
        return { ...prev, appointments }
      })
    })
}



const updateSpots = (id, appointments) => {
  const day = state.days.filter((day, index) =>
    day.appointments.includes(id)
  )[0]


  day.spots = day.appointments.reduce((acc, apptID) => {
    if (!appointments[apptID].interview) {
      acc += 1
    }
    return acc
  }, 0)

  const days = [...state.days]
  const dayIndex = day.id - 1
  days[dayIndex] = day

  setState(prev => {
    return { ...prev, days }
  })
}

  return {
    state,
    setState,
    bookInterview,
    cancelInterview,
    setDay,
  }

};