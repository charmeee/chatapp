import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


function RegisterPage() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div className='auth-wrapper'>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div>
        <h3 style={{textAlign : 'center' , fontWeight:'bold'}}>
          Resigter
        </h3>
      </div>
      <form>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Email</label>
        <input placeholder="abc@gmail.com" type="email" name='email' />
        <label>Name</label>
        {/* include validation with required or other standard HTML validation rules */}
        <input name='name' />
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <label>Password</label>
        <input name='password' type="password "/>
        <label>Password Confirm</label>
        <input name='password_confirm' type="password" />
        <input type="submit" />
        <Link to="/login" style={{color:'gray', textDecoration: 'none'}}>
        이미 아이디가 있다면
        </Link>
      </form>
    </div>
    
  );
}

export default RegisterPage