import 'bootstrap/dist/css/bootstrap.min.css';


// React Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main.scss'

//Component Imports
import MajorOrder from './components/MajorOrder';
import Statistics from './components/Statistics';

function App() {

  return (
    <div className='pageContainer'>
      <div className='topBar'>
        <h1 className='pageTitle'>Democracy Manifest</h1>
        <img src="./helldivers-icon.svg" alt="The Skull logo for the video game Helldivers 2" />
      </div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <MajorOrder />
          </Col>
          <Col sm={12} md={6}>
            <Statistics />
          </Col>
        </Row>
        <Row>
          <Col>Messages</Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
