import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css';
import {NavLink,Link} from 'react-router-dom';

class VRegistration extends React.Component
{
    constructor()
    {
      super()
      this.state={
          data:[{
              Brand:"",
              City:"",
              Type:"",
            Phone:"",
            Email:"",
            Password:""
          }],
      }
      this.fun=this.fun.bind(this);
    }

saving=(e)=>{
    
console.log('Renning................')

var arr=[];
var obj={
Brand:this.state.Brand,
City:this.state.City,
Type:this.state.Type,
Phone:this.state.Phone,
Email:this.state.Email,
Password:this.state.Password
}

if(localStorage.getItem('ven')!=null)
{
    alert('Saving :'+obj.Brand);
    let Sobj=JSON.parse(localStorage.getItem('ven'));
    for(var i=0;i<Sobj.length;i++)
    {
      arr.push(Sobj[i]);
    }
    arr.push(obj);
    localStorage.setItem('ven',JSON.stringify(arr));
}else{
    alert('Saving :'+obj.Brand);
    arr.push(obj);
    localStorage.setItem('ven',JSON.stringify(arr));
}
}

 fun(){
     if(this.state.Brand!=null && this.state.City!=null && this.state.Type!=null && this.state.Phone!=null &&this.state.Email!=null && this.state.Password!=null)
     return 1;
     return 0;
 }

    render()
    {
        return(
            <section>
             <form>
            <div className="Registration">
            <div className="heading"> <h3>Registration</h3><br/>
            Brand Name <input type="text" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Brand:event.target.value})}/>
           <br/>
          City (Choice your base city here) <input type="text" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({City:event.target.value})}/>
           <br/>
           Select Vendor Type <input type="text" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Type:event.target.value})}/>
           <br/>

            Phone number <input type="number" className="form-control" placeholder="Mindatary field**" required onChange={event=>this.setState({Phone:event.target.value})}/>
            <br/>
            Email_Id <input type="email" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Email:event.target.value})}/>
            <br/>
           Password <input type="text" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Password:event.target.value})}/>
           <br/>
           <NavLink to='./Vlogin'  onClick={this.saving}><button type="submit" disabled={this.fun() ? false:true} >Signup</button></NavLink>&nbsp;&nbsp;<input type='reset' value='reset '/>
            </div>
            </div>
            </form>
            </section>
        )
    }
}

export default VRegistration;