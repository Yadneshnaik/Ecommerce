import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {

    const [udata,setUdata] = useState({
        name:"",
        email:"",
        number:"",
        password:"",
        cpassword:""
    })

    console.log(udata);

    const adddata = (e)=>{
        const {name,value} = e.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }
    
    return (
        <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./RS.png' alt='RedStoreLogo' />
            </div>
            <div className='sign_form'>
                <form>
                    <h1>Signup</h1>
                    <div className='form_data'>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' 
                        onChange={adddata}
                        value={udata.name}
                        name='name' id='name' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' 
                        onChange={adddata}
                        value={udata.email}
                        name='email' id='email' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='number'>Phone Number</label>
                        <input type='number' 
                        onChange={adddata}
                        value={udata.number}
                        name='number' id='number' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'  
                        onChange={adddata}
                        value={udata.password}
                        name='password' placeholder='At least 8 Characters' id='password' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='cpassword'>Conform Password</label>
                        <input type='password'  
                        onChange={adddata}
                        value={udata.cpassword}
                        name='cpassword' id='cpassword' />
                    </div>
                    <button className='signin_btn'>Continue</button>
                    <div className='signin_info'>
                        <p>Already have an Account</p>
                        <NavLink to='/login'>Signin</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}
export default Signup