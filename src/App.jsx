import 'bootstrap/dist/css/bootstrap.min.css';


// React Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main.scss'

function App() {

  return (
    <>
      <h1>Democracy Manifest</h1>
      <Container>
        <Row>
          <Col className='majorOrder' sm={12}>Major Order</Col>
        </Row>
        <Row>
          <Col>Messages</Col>
        </Row>
      </Container>
    </>
  )
}

export default App
