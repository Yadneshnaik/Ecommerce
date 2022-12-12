import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './signup.css';

const Sign_in = () => {

    const[logdata,setData] = useState({
        email:"",
        password:""
    });
    console.log(logdata);

    const adddata = (e)=>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...logdata,
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
                        <h1>Signin</h1>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text'
                            onChange={adddata}
                            value={logdata.email}
                            name='email' id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' 
                            onChange={adddata}
                            value={logdata.password}
                            name='password' placeholder='At least 8 Characters' id='password' />
                        </div>
                        <button className='signin_btn'>Continue</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>New To RedStore</p>
                    <NavLink to='/Register'><button>Create Your Account</button></NavLink>
                </div>
            </div>
        </section>
    )
}
export default Sign_in