import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const {createUser}= useContext(AuthContext)

    const handleSignUp =(event)=>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
        
     }
  return (
    <section className="login">
      <div className="container mx-auto">
        <div className="loginfrom px-20 pt-12 pb-40 rounded-lg">
          <form onSubmit={handleSignUp} className="text-center">
            <h2 className="text-2xl font-bold text-center mb-8">
              Create Account
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
              <button className="loginbtn text-xl font-semibold"> SignUp</button>
            </div>

        <p className="mt-5">Already have an account ? <Link to='/Login'>Login</Link></p>
          </form>
        </div>
      </div>
    </section>
    );
};

export default SignUp;