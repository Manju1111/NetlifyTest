import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route ,Link ,NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from './other/login.js';
import VLogin from './other/Vlogin.js';
import Registration from './other/registration.js';
import VRegistration from './other/Vregistration.js';
import Wel from './other/welcome.js';
import {Container, Col, Form,FormGroup, Label, Input,Button,Row} from 'reactstrap';




const Home=()=>(
   <section> <h1>Home</h1>
    <h3>The way of marreges</h3></section>
)


class App extends React.Component
{
    render()
    {
        return(
            <section> <h1>WED HALL</h1>
                    <Router>
                        <section>
                    <div className="navbar">
                    <Row>
                    <NavLink exact to="/">Home</NavLink>
                    <div className="col-md-1"></div>
                 <NavLink to="/login">Login</NavLink>
                 <div className="col-md-1"></div>
                 </Row>
                </div>
                 
                 <Route exact path="/" component={Home} />
                 <Route path="/login" component={Login} />
                 <Route path="/Vlogin" component={VLogin} />
                 <Route path="/registration" component={Registration} />
                 <Route path="/Vregistration" component={VRegistration} />
                 <Route path="/Welcome" component={Wel} />
                 </section>
                 </Router>
            </section>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('a'));