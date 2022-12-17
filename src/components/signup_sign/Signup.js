import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
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
    };



    const senddata = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = udata;

        const res = await fetch("register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword
            })
        });

        const data = await res.json();
        // console.log(data);


        if (res.status === 422 || !data) {
            // alert("no data")
            toast.warn("Invalid Data",{
                position:"top-center"
            })
        }else{
            // alert("data successfully added");
            toast.success("data successfully added",{
                position: "top-center",
            })
            setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
        }
    }
    
    return (
        <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./RS.png' alt='RedStoreLogo' />
            </div>
            <div className='sign_form'>
                <form method='POST'>
                    <h1>Signup</h1>
                    <div className='form_data'>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' 
                        onChange={adddata}
                        value={udata.fname}
                        name='fname' id='name' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' 
                        onChange={adddata}
                        value={udata.email}
                        name='email' id='email' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='number'>Mobile number</label>
                        <input type='number' 
                        onChange={adddata}
                        value={udata.number}
                        name='mobile' id='mobile' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'  
                        onChange={adddata}
                        value={udata.password}
                        name='password' placeholder='At least 6 Characters' id='password' />
                    </div>
                    <div className='form_data'>
                        <label htmlFor='cpassword'>Conform Password</label>
                        <input type='password'  
                        onChange={adddata}
                        value={udata.cpassword}
                        name='cpassword' id='cpassword' />
                    </div>
                    <button className='signin_btn' onClick={senddata}>Continue</button>
                    <div className='signin_info'>
                        <p>Already have an Account</p>
                        <NavLink to='/login'>Signin</NavLink>
                    </div>
                </form>
            </div>
           <ToastContainer /> 
        </div>
    </section>
    )
}
export default Signup