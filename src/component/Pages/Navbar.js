import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Narbar =()=>{
  
  
    return(
        <>
    < Navbar bg="white" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">MiroirFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  "
            style={{ maxHeight: '100px', flexDirection:'left' }}
            navbarScroll
            
          >
            <Nav.Link href="#action1"  >Films</Nav.Link>
            <Nav.Link href="#action2">Emissions</Nav.Link>
          
            <Nav.Link href="#">
              TV
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )

}
export default Narbar;