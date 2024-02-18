import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Footer() {
  return (
    <Container fluid>
      <Row className='footer mt-5'>
        <Col className='d-flex justify-content-center'>
          <h2>Alvaro Vaquero Gento</h2>
        </Col>
        <Col className='logo_cabecera d-flex justify-content-center'>
        <a href='https://github.com/alvarovaquero25/Practica7-React.git'>Enlace Github</a>
        </Col>
      </Row>
    </Container>
  );  
}
export default Footer;