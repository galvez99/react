import logo from '../assets/img/logo-claret.png'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Cabecera() {
  return (
    <Container fluid>
      <Row className='header'>
        <Col className='d-flex justify-content-end'>
          <h1>Colegio</h1>
        </Col>
        <Col className='logo_cabecera d-flex justify-content-end'>
          <img src={logo} alt='logo'></img>
        </Col>
      </Row>
    </Container>
  );  
}

export default Cabecera;
