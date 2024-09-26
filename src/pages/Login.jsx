import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ShopContext } from "../componants/context/ShopContext";

export const Login = () => {
  const navigate = useNavigate();
  const { setLoginStatus } = useContext(ShopContext); // Get the function to update login status from the context
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const [loading, setLoading] = useState(false); // To manage loading state

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const submitHandler = async () => {
    setLoading(true); // Start loading
    setErrorMessage(""); // Clear previous error message
    try {
      const response = await axios.post("http://localhost:9090/signin", userData);
      if (response.data.success) {
        // Store the token in localStorage
        localStorage.setItem("auth-token", response.data.token);
        
        // Update the login status using the context function
        setLoginStatus(true);

        setUserData({
          email: "",
          password: ""
        });
        
        // Navigate to home or another page after successful login
        navigate("/", { replace: true });
      } else {
        // Handle error messages from the backend
        setErrorMessage(response.data.error || "Login failed");
      }
    } catch (error) {
      console.log("Login error", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
    setLoading(false); // Stop loading
  };

  return (
    <div className='max-w-full bg-custom-gradient-form h-[516px] flex items-center justify-center'>
      <div className="bg-white h-80 rounded-md">
        <div className="pt-8 ps-5 pe-5">
          <h1 className="font-bold text-center text-2xl">Login</h1>

          {/* Email Input */}
          <div className="pt-3">
            <input 
              className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md"
              type="email" 
              name="email" 
              value={userData.email} 
              placeholder="Email" 
              onChange={changeHandler} 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="pt-5">
            <input 
              className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" 
              type="password" 
              name="password" 
              value={userData.password} 
              placeholder="Password" 
              onChange={changeHandler} 
              required 
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="pt-2 text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-5">
            <button 
              className={`bg-red-500 pt-1 ps-36 pe-32 rounded-lg text-white font-normal ${loading && "opacity-50 cursor-not-allowed"}`}
              onClick={submitHandler}
              disabled={loading} // Disable button during loading
            >
              {loading ? "Logging in..." : "Continue"}
            </button>
          </div>

          {/* Signup Link */}
          <div className="pt-2">
            <span className="text-sm">Create an account?</span>
            <Link to="/signup">
              <button className="text-red-900 text-sm ps-1">Click here</button>
            </Link>
          </div>

          {/* Terms & Privacy Policy Checkbox */}
          <div className="pt-1">
            <input type="checkbox" className="text-sm" required />
            <span className="text-sm ps-2">
              By Continuing, I agree to the terms & privacy policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
