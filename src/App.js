//import logo from './logo.svg';
//import './App.css';
import {  } from 'react-icons/fa';
//import { HiOutlineSearch } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Col,Row , Card, ListGroup} from 'react-bootstrap';
import Search from './components/Search';
import AddAppointments from './components/AddAppointments';
import appointList from "./data.json";
import AppointmentInfo from './components/AppointmentInfo';

function App() {
//  let [appointmentList,setAppointmentList] = useState();
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-light mt-3'><FaCalendarAlt />Appointment</h1>
         
 
          </Col>
        </Row>
        <Row className='justify-content-center'>
<AddAppointments/>
        </Row>
        <Row className='justify-content-center'>
          <Col md={4}>
          <Search/>
          </Col>
         
        </Row>
        <Row className='justify-content-center'>
<Col md="8">
  <Card className="mb-3">
<Card.Header>Appointments</Card.Header>
<ListGroup variant="flush">
{appointList.map(appointment=>(
  <AppointmentInfo key={appointment.id} appointment={appointment}/>
))}
</ListGroup>
  </Card>
</Col>
        </Row>
      </Container>
 
    </div>
  );
}

export default App;
