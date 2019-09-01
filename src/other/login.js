import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Form,FormGroup, Label, Input,Button,Row} from 'reactstrap';
import fair1 from './images/fair1.jpg';
import './login.css';
import {BrowserRouter as Router ,Route ,Link ,NavLink} from 'react-router-dom';


class Login extends React.Component
{
    render()
    {
        return(
           
            <section>

<Row>
<img src={fair1} alt='Not Found' className='AppI'/>
<Container className="App">
        <h2>Sign In</h2>

        <Form className="form">

        <div className='disign'>
        <Row>&nbsp;</Row>
        
        <Col>
            <FormGroup>   <Row>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Label>UserName :</Label>
              <Input type="text" name="name" id="name" placeholder="User123M"/>
              </Row></FormGroup>
          </Col>
        
        
          <Row>&nbsp;</Row>
         

          <Col>
            <FormGroup>
                <Row>
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <Label for="examplePassword">Password :</Label>
              <Input type="password" name="password" id="password" placeholder="********"/>
              </Row>
            </FormGroup>
          </Col><br/>



          <Row>
          <div className="col-md-1"></div> 
         <a href='#' className='ven'>Forgot password ?</a><div className="col-md-5"></div> Are you Vender.. <NavLink to="/Vlogin" className='ven'>Login here</NavLink>
           <div className="col-md-4"></div> 
          </Row><br/>

          <Row>&nbsp;</Row>

      <Row>
          <div className="col-md-2"></div> 
            <Button className='col-xs-4'>Submit</Button>
            <div className="col-md-6"></div>   
              <NavLink to='./registration'><Button className='col-xs-3'>Sign up</Button></NavLink>
     </Row>
     <Row>&nbsp;</Row>
     </div>
     <Row>&nbsp;</Row>
     

        </Form>
      </Container>
      </Row>
            </section>
        )
    }
}

export default Login;

