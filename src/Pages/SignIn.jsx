import { useNavigate } from 'react-router-dom';
import signinImg from '../assets/signIn-img.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { Context } from '../context/userContext/Context';
import Axios from 'axios';

function SignIn() {
  const { user, dispatch } = useContext(Context);
  console.log(user);

  const schema = yup.object().shape({
    Email: yup.string().email().required("Email is required"),
    Password: yup.string().required("Password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    Axios.post('http://localhost:3000/auth/login', data)
      .then(({ data }) => {
        if (data.token) {
          dispatch({ type: 'LOGIN_SUCCESSFUL', payload: data });
          alert("Login successful");
          navigate('/dashboard');
        }
      })
      .catch((response) => {
        alert(response);
        console.log(response);
      });
  }

  return (
    <div
      className="hero flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content fle text-neutral-content text-center">
        <div className=" flex flex-col  max-w-md">
          <h1 className="mb-5  text-5xl font-bold">Login now!</h1>
        
          <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("Email")} required />
                <p className="text-red-500">{errors.Email?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("Password")} required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <p className="text-red-500">{errors.Password?.message}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <h4 className="mt-5">Have No Account? <button onClick={() => navigate('/signup')} className="link link-hover text-primary">Sign Up</button></h4>
        </div>
      </div>
     
    </div>
  );
}

export default SignIn;
