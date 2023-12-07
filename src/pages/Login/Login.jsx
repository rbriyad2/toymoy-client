import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const {signIn, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


     const handleLogin =(event)=>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        signIn(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
          navigate(from, {replace: true}) 
        })
        .catch((error) => {
          console.log(error.message);
          
        });
      }

    const handleGoogleLogin =()=>{
      googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);

        // navigate(from, {replace: true})
      }).catch((error) => {
        console.log(error);
      });
    
    }
  return (
    <section className="login">
      <div className="container mx-auto">
        <div className="loginfrom px-20 pt-12 pb-40 rounded-lg">
          <form onSubmit={handleLogin} className="text-center">
            <h2 className="text-2xl font-bold text-center mb-8">
              Login Account
            </h2>
            <div className="email text-xl font-normal mb-4">
              <label htmlFor="email">Your Email: </label>

              <input className="rounded px-3 py-1" type="email" name="email" />
            </div>

            <div className="email text-xl font-normal mb-4">
              <label htmlFor="password">Password: </label>

              <input
                className="rounded px-3 py-1 ml-3"
                type="password"
                name="password"
              />
            </div>
            <div className="loginbutton text-center">
              <button className="loginbtn px-20 text-xl font-semibold"> Login</button>
            </div>

        <p className="mt-5">Don't have account ? <Link to='/signup'>Signup</Link></p>
          </form>

          <div className="google mt-5">
          <div onClick={handleGoogleLogin} className="googlebg mx-auto">
            <FcGoogle className="text-7xl mx-auto"></FcGoogle>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
