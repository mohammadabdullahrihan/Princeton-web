import { useContext } from "react";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProvider";

const SignIn = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const notify = () => toast("Login Successfully");

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          notify();
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${darkMode ? "bg-[#212121]" : "bg-white"} ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="hero h-[40rem] bg-[#8E8A1F]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <form className="card-body  rounded-md " onSubmit={handleSignIn}>
              <div className="text-[#8E8A1F]">
                <h1 className={` text-center font-bold text-5xl`}>Login</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#8E8A1F] text-2xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#8E8A1F] text-2xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered text-black"
                  required
                />
                <label className="label">
                  <Link
                    to=""
                    className="label-text-alt link link-hover text-[#8E8A1F] text-xl"
                  >
                    Forgot password?
                  </Link>
                </label>
                {/* <label className="label">
                  <Link
                    to="/admin-register"
                    className="label-text-alt link link-hover text-[#8E8A1F] text-xl"
                  >
                    New Chuti Harmony?{" "}
                    <span className=" text-xl">Register</span>
                  </Link>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
