import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"; 
import sai from '../img/sai.jpg';
import './Head.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <div className='container' id="team">
    <h2><span style={{color:'maroon'}}>Team</span></h2>
    <hr style={{color:'maroon'}}></hr>
    <div className='margin-class bg-body-tertiary rounded-3'>
     <Container>
      <Row>
        <Col>
          <Image src="https://media.licdn.com/dms/image/D5603AQFFjnsPmVqLug/profile-displayphoto-shrink_800_800/0/1678344581373?e=2147483647&v=beta&t=UMBCWCJYr_uCixKqtDopMrpwklrc9qGEBw3tPw9OW6s" roundedCircle height={300} width={300} className='Img'/>
          <div className='details'>
            <h3><span style={{color:'maroon'}}>Sanjay Pothuraju</span></h3>
            <p>Developer</p>
            <div className='Icons'>
            <Button variant='tabs'  href='https://www.linkedin.com/in/sanjay-pothuraju-6baa3623b/?originalSubdomain=in' className='rounded-circle'>
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Button>
            <Button variant='tabs' href='https://github.com/PSanjay333' className='rounded-circle'>
            <FontAwesomeIcon icon={faGithub} size='2xl'/>
            </Button>
            </div>
          </div>
        </Col>
        <Col>
          <Image src={sai} roundedCircle height={300} width={300} className='Img'/>
          <div className='details'>
            <h3><span style={{color:'maroon'}}>Saiteja Korra</span></h3>
            <p>Developer</p>
            <div className='Icons'>
            <Button variant='tabs' href='https://in.linkedin.com/in/saiteja-korra-9ab504261' className='rounded-circle'>
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Button>
            <Button variant='tabs' href='' className='rounded-circle hover-effect'>
            <FontAwesomeIcon icon={faGithub} size='2xl'/>
            </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Team