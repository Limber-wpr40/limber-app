import React, {Component} from 'react';
import './Profile.css';
class Profile extends Component{


    render(){

        return(

            <div>
<div className="my-info">
<img src="../images/man10.jpeg" alt='brian' className='profile-pic'/>
<div className="nameage">{`Brian, 58`}</div>
</div>

            </div>
        )
    }
}

export default Profile