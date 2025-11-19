import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage() {
  // Form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  // Handle change
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    if (field === "email") {
      if (!value.trim()) {
        setErrors((e) => ({ ...e, email: "" }));
      } else if (!validateEmail(value)) {
        setErrors((e) => ({ ...e, email: "Invalid email address" }));
      } else {
        setErrors((e) => ({ ...e, email: "" }));
      }
    }

    if (field === "password") {
      if (!value.trim()) {
        setErrors((e) => ({ ...e, password: "" }));
      } else if (!validatePassword(value)) {
        setErrors((e) => ({
          ...e,
          password: "Password must be at least 8 characters",
        }));
      } else {
        setErrors((e) => ({ ...e, password: "" }));
      }
    }
  };

  // Form completion
  const allFilled =
    form.email &&
    form.password &&
    errors.email === "" &&
    errors.password === "";

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#f5f7fa] relative overflow-hidden px-4 md:px-6">
      {/* Background Shapes */}
      <div className="absolute -left-20 -top-20 md:-left-40 md:-top-40 w-[250px] md:w-auto">
        <img
          src="/assets/sideBackground.png"
          className="w-full h-auto"
          alt=""
        />
      </div>

      <div className="absolute -right-20 bottom-0 md:-right-32 w-[250px] md:w-auto">
        <img
          src="/assets/sideBackgroundr.png"
          className="w-full h-auto"
          alt=""
        />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6 relative">
        {/* Segmented Tabs */}
        <div className="flex w-full bg-gray-100 rounded-full p-1 text-sm font-medium">
          <button className="w-1/2 py-1 rounded-full text-[14px] bg-white shadow text-gray-700">
            <Link to={"/login"}>Login</Link>
          </button>

          <button className="w-1/2 py-2 rounded-full text-[14px] text-gray-700">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
        </div>

        {/* Description */}
        <div>
          <p className="text-[16px]">Welcome Back</p>
          <p className="text-[16px] text-[#727272] mt-1.5 leading-snug">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Google Button */}
          <button className="w-full h-11 border rounded-lg flex items-center justify-center gap-2 font-medium text-[16px] border-[#B9B9B9]">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-[14px] text-[#6A7282]">
            <div className="flex-1 h-px bg-gray-200" />
            Or continue with email
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email */}
          <label htmlFor="email" className="text-[14px] font-normal">
            Email Address
          </label>
          <input
            placeholder="Enter your email address"
            className="w-full h-11 px-3 rounded-lg text-[#4F4F4F] text-sm bg-[#E6E6E6] focus:outline-[#1D6ECC]"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-[12px]">{errors.email}</p>
          )}

          {/* Password */}
          <label htmlFor="password" className="text-[14px] font-normal">
            Password
          </label>

          <div className="relative">
            <input
              placeholder="******"
              type={showPassword ? "text" : "password"}
              className="w-full h-11 px-3 rounded-lg text-sm text-[#4F4F4F] bg-[#E6E6E6] focus:outline-[#1D6ECC]"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />

            {/* Eye Icon */}
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "👁"}
            </span>
          </div>

          {errors.password && (
            <p className="text-red-500 text-[12px]">{errors.password}</p>
          )}

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center mt-1">
            <label className="flex items-center gap-2 text-[14px] text-[#4F4F4F]">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-[14px] text-[#1D6ECC]">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            disabled={!allFilled}
            className={`w-full h-11 rounded-lg text-sm cursor-pointer 
              ${
                allFilled
                  ? "bg-[#1D6ECC] hover:bg-blue-700 text-white"
                  : "bg-[#D2DFEE] text-[#FFFFFF] cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </div>

        {/* Continue as Guest */}
        <div className="text-center mt-2">
          <button className="text-[#1D6ECC] text-sm font-medium">
            Continue as Guest
          </button>

          <p className="text-[#959595] text-sm mt-1">
            Browse mechanics and pricing without an account
          </p>
        </div>
      </div>
    </div>
  );
}
