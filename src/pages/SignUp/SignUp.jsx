import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../src/assets/Login/Frame.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name)
        .then(() => {
          console.log("User profile updated")
        })
        .catch(error => console.log(error))
      Swal.fire({
        title: "User create successfully",
        icon: "success",
        draggable: true,
      });
      navigate("/");
    });
  };
  return (
    <>
      <Helmet>
        <title>Doc House | Sign Up</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="flex">
          <div className="text-center bg-[#07332F] md:w-1/2 p-10 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold p-10">Sign Up to Doc House</h1>
            </div>
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>
            </form>
            <p className="p-10">
              Already have an account? <Link to="/login">Please, Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
