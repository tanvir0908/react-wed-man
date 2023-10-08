import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function Login() {
  // Sweet Alert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const { signIn, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        // setLoginError(error.message);
        setLoginError("Invalid email and password");
      });
  };
  console.log(loginError);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
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
      <div className="flex justify-center items-center">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center bg-gray-200 px-5 py-2 rounded-lg gap-2 text-lg font-medium "
        >
          <FcGoogle className="text-3xl" />
          Login with Google
        </button>
      </div>
      <p className="text-center text-red-500 text-lg font-medium mt-5">
        {loginError}
      </p>
    </div>
  );
}
