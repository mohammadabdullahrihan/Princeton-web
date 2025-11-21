import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { createUser } = useContext(AuthContext);

  const notify = () => toast("User Created Successfully");

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          notify();
          navigate("/");
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
            <form className="card-body  rounded-md " onSubmit={handleSignUp}>
              <div className="text-[#8E8A1F]">
                <h1 className={` text-center font-bold text-5xl`}>Register</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#8E8A1F] text-2xl">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#8E8A1F] text-2xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
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
                <label className="label">
                  <Link
                    to="/login"
                    className="link link-hover text-[#8E8A1F] text-xl"
                  >
                    Already Have An Account?
                    <span className="text-xl">Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
