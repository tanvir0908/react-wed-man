import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // Create user using email and password
    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      createUser(email, password)
        .then((result) => {
          console.log(result);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    } else {
      setError(
        "Password should be more than 6 characters with at least 1 capital letter and 1 special character"
      );
    }
  };

  return (
    <div>
      {/* Login Form */}
      <h2 className="text-4xl font-bold text-[#ff69b4] text-center my-10">
        Please Register
      </h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-2/6 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo url"
            className="input input-bordered"
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
      <p className="text-center my-5 text-[#706F6F] font-medium">
        Already have an account?{" "}
        <Link className="font-medium text-[#ff69b4]" to={"/login"}>
          Login
        </Link>
      </p>
      <p className="text-center text-red-500 text-lg font-medium">{error}</p>
    </div>
  );
}
