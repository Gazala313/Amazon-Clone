import React from 'react';
import "./loginpage.scss";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';


export default function LoginPage() {
    // const history = useHistory();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { myReducer } = useStateValue();
    const [ ,dispatch ] = myReducer;
       

    const addUser = (event) => {
        
        dispatch({
            type: "ADD_USER",
            user: event.target.value
        })  
        console.log("value",event.target.value)
       
    }
    const register = event => {
        event.preventDefault();
    }
    
    const onSubmit=(data)=>{
      console.log(data);  
    }
    const setUserName = (event) => {
        addUser(event);
    }

  return (
    <div className='login'>
         <Link to="/">
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
                </Link>
            <div className='login__container'>
                <h1>Sign In</h1>

                <form >
                
                    <h5>E-mail</h5>
                    <input className='input_box' type='email' onChange={setUserName} 
                    // {...register("email",{
                    //     require:true,
                    //     pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                    // })}
                    />
                   
                    {/* {errors.email && <p style={{color:"red",fontSize:"10px", paddingTop:"0"}}>Please check the Email</p>} */}
                    
                    <h5>Password</h5>
                    <input className='input_box' type='password' 
                    // {...register("password",{
                    //     require: true,
                    //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                    // })}
                     />
                    {/* {errors.password && <p style={{color:"red",fontSize:"10px",paddingTop:"0"}}>Please check the Password</p>} */}
                    <button type='submit' >
                        <Link to="/"> Sign In</Link>
                            </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
  )
}
