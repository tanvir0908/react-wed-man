import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("Location in the login page", location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* Login Form */}
      <h2 className="text-4xl font-bold text-[#ff69b4] text-center my-10">
        Please Login
      </h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-2/6 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 ">
          <button className="bg-[#ff69b4] hover:bg-[#ff69b4] text-white hover:text-black btn normal-case text-lg">
            Login
          </button>
        </div>
      </form>
      <p className="text-center my-5 text-[#706F6F] font-medium">
        Do not have an account?{" "}
        <Link className="font-medium text-[#ff69b4]" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
}
