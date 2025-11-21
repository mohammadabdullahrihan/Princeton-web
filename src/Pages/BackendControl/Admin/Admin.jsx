import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Admin = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <section>
      <div>
        <Outlet />
      </div>

      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <h1 className="text-xl">
              {user?.email
                ? "Welcome to Chuti Harmony Admin"
                : navigate("/login")}
            </h1>
            <h1 className="mx-10"></h1>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    loading="lazy"
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p>Email: {user?.email}</p>
                </li>
                {/* <li>
                  <a>Settings</a>
                </li> */}
                <li>
                  {/* Removed wrapping <a> around the button */}
                  <button
                    onClick={handleLogout}
                    className="btn btn-error w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
