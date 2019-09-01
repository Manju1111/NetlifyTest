import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Form,FormGroup, Label, Input,Button,Row} from 'reactstrap';
import fair2 from './images/fair2.jpg';
import './login.css';
import {BrowserRouter as Router ,Route ,Link ,NavLink} from 'react-router-dom';


class VLogin extends React.Component
{

  // constructor()
  // {
  //   super();
  //   this.validate=this.validate.bind(this);
  // }

  validate=(e)=>
  {
 
    e.preventDefault();
	if(1==2)
    alert('Welcome');
    
  }

    render()
    {
        return(
           
            <section>

<Row>
<img src={fair2} alt='Not Found' className='AppI'/>
<Container className="App">
        <h2>Sign In</h2>

        <Form className="form">

        <div className='disign'>
        <Row>&nbsp;</Row>
        
          <Col>
            <FormGroup>   <Row>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Label>Email_Id :</Label>
              <Input type="email" name="name" id="name" placeholder="ie..email@gmail.com"/>
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
         <a href='#' className='ven'>Forgot password ?</a><div className="col-md-5"></div><NavLink to="/login" className='ven'>Login as Customer!! ?</NavLink>
           <div className="col-md-4"></div> 
          </Row><br/>

          <Row>&nbsp;</Row>

      <Row>
          <div className="col-md-2"></div> 
          <ul onClick={this.validate}><NavLink to='./Welcome'><Button className='col-xs-4' type='submit'>Submit</Button></NavLink></ul>
            <div className="col-md-6"></div>
             
          <NavLink to='./Vregistration'><Button className='col-xs-3'>Sign up</Button></NavLink>
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

export default VLogin;

