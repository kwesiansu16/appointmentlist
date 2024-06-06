import React from 'react';
import { ListGroup } from 'react-bootstrap';
function AppointmentInfo({appointment}) {
  return (
    <>
    <ListGroup.Item>
  <p><strong>Date : </strong>{appointment.aptDate}</p>
  <p><strong>First Name : </strong>{appointment.firstname}</p>
  <p><strong>Last Name : </strong>{appointment.lastname}</p>
  <p><strong>Comments :</strong> {appointment.aptNotes}</p>
</ListGroup.Item>
    </>
  )
}

export default AppointmentInfo
