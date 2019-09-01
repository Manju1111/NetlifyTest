import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css';
import {BrowserRouter as Router ,Route ,Link ,NavLink} from 'react-router-dom';

class Registration extends React.Component
{
    constructor()
    {
      super()
      this.state={
          data:[{
              Name:"",
            Phone:"",
            Email:"",
            Password:""
          },

        {
            valiN:""
        }
        
        ]
      }
      this.valii=this.valii.bind(this);
      this.phoneV=this.phoneV.bind(this);
      this.fun=this.fun.bind(this);
    }

    phoneV=()=>{
       alert('mmm');
    }

    valii=(event)=>{
        this.setState({Name:event.target.value})
        if(event.target.value.length<=4)
        {
            this.setState({valiN:'Name should be more then 4 charactor'})
        }else{
            this.setState({valiN:''})
        }

    }

    saving=(e)=>{
       
    console.log('Renning................')
    
    var arr=[];
    var obj={
    Name:this.state.Name,
    Phone:this.state.Phone,
    Email:this.state.Email,
    Password:this.state.Password
    }
    
    if(localStorage.getItem('user')!=null)
    {
        alert('Saving :'+obj.Name);
        let Sobj=JSON.parse(localStorage.getItem('user'));
        for(var i=0;i<Sobj.length;i++)
        {
          arr.push(Sobj[i]);
        }
        arr.push(obj);
        localStorage.setItem('user',JSON.stringify(arr));
    }else{
        alert('Saving :'+obj.Name);
        arr.push(obj);
        localStorage.setItem('user',JSON.stringify(arr));
    }
    }
    

 fun(){
     if(this.state.Name!=null && this.state.Phone!=null &&this.state.Email!=null && this.state.Password!=null)
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
            Name<input type="text" className="form-control" placeholder="Mindatary field*" required onChange={this.valii}/><i className='vali'>{this.state.valiN}</i>
           <br/>
            Phone number <input type="number" className="form-control" placeholder="Mindatary field**" required onChange={event=>this.setState({Phone:event.target.value})}/>
            <br/>
            Email_Id <input type="email" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Email:event.target.value})}/>
            <br/>
           Password <input type="text" className="form-control" placeholder="Mindatary field*" required onChange={event=>this.setState({Password:event.target.value,toggle:0})}/>
           <br/>
           <NavLink to='./login' onClick={this.saving}><button disabled={this.fun() ? false:true} >Signup</button></NavLink>&nbsp;&nbsp;<input type='reset' value='reset '/>
            </div>
            </div>
            </form>
            </section>
        )
    }
}

export default Registration;