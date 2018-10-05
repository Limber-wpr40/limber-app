import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom'



class Phonenumber extends Component{
constructor(props){
    super(props)

    this.state ={
        phone:'',
     

    }
    this.handleInput = this.handleInput.bind(this)
}

handleInput(e){ 
  this.setState({phone:e.target.value})
}


render(){
    let isActive = this.state.phone.length === 10 ? true : false



        return(
            <div>
                <img className='myarrow' src="" alt='back'/>
               <h1>My phone number is</h1>
               <div className='phone-id'>
               <input className='country-code' placeholder='US +1' />
               <input className="phone-holder" placeholder='Phone Number' onChange={(e) => this.handleInput(e)} />
               </div>
               <div className='fineprint'>
               <div className='change-phone'>
               <div className='phone-question'>Changed your phone number?</div>
               <Link to='/email' className='email-link' >
               <div >LOGIN BY EMAIL</div> 
               </Link>
               </div>
               <p>
               When you tap continue, limber will send a text with verification code. Message and Data rates may apply. The verified phone number can be used to login.<br/>
               <a className='phone-help' href='www.help.tinder.com/hc/en-us/articles/360005147211'>Learn what happens when you number changes.
               </a>
               </p>
               <Link to='./verify'>
               <button className={(isActive ? 'continue-active' :'continue') + ' btn'}>CONTINUE</button>
               </Link>
               </div>
            </div>
        )
    }
}

export default Phonenumber