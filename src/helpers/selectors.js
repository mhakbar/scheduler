export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter(x => x.name === day)[0]

  return selectedDay
    ? selectedDay.appointments.map(apptId => state.appointments[apptId])
    : []
}



export function getInterview(state, interview) {
  return interview && interview.interviewer
    ? {
        student: interview.student,
        interviewer: state.interviewers[interview.interviewer],
      }
    : null
}


export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.filter(x => x.name === day)[0]

  return selectedDay
    ? selectedDay.interviewers.map(interviewer => state.interviewers[interviewer])
    : []
}


