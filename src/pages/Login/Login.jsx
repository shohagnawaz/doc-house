import { useContext } from "react";
import loginImg from "../../../src/assets/Login/Frame.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User login successfully",
        icon: "success",
        draggable: true
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Doc House | Login</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="flex">
          <div className="text-center bg-[#07332F] md:w-1/2 p-10 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold p-10">Login to Doc House</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
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
                  value="Login"
                />
              </fieldset>
            </form>
            <p className="p-10">
              New in here? <Link to="/signup">Please, create an user</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
