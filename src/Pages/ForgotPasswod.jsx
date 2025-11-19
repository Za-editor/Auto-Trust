import { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState("send"); // send | otp | reset | success
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);

  const [passwords, setPasswords] = useState({
    password: "",
    confirm: "",
  });

  const [passError, setPassError] = useState("");

  // OTP logic
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(false);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code === "123456") setStep("reset");
    else setError(true);
  };

  // Password logic
  const handlePasswordChange = (field, value) => {
    setPasswords((p) => ({ ...p, [field]: value }));

    if (!value.trim()) {
      setPassError("");
      return;
    }

    if (field === "password" && value.length < 8) {
      setPassError("Password must be at least 8 characters");
      return;
    }

    if (field === "confirm" && value !== passwords.password) {
      setPassError("Passwords do not match");
      return;
    }

    setPassError("");
  };

  const canReset =
    passwords.password.length >= 8 &&
    passwords.confirm.length >= 8 &&
    passwords.password === passwords.confirm &&
    passError === "";

  const finishReset = () => {
    if (canReset) setStep("success");
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#f5f7fa] relative overflow-hidden px-4 md:px-6">
      {/* Backgrounds */}
      <div className="absolute -left-20 -top-20 md:-left-40 md:-top-40 w-[250px] md:w-auto">
        <img src="/assets/sideBackground.png" className="w-full h-auto" />
      </div>

      <div className="absolute -right-20 bottom-0 md:-right-32 w-[250px] md:w-auto">
        <img src="/assets/sideBackgroundr.png" className="w-full h-auto" />
      </div>

      {/* CARD */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6">
        {/* ===================== SEND RESET EMAIL ===================== */}
        {step === "send" && (
          <div className="text-center space-y-[18px]">
            <div className="flex items-center justify-center mx-auto">
              <img src="/assets/Mail2.png" alt="" />
            </div>

            <p className="text-4">Forgot Password?</p>

            <p className="text-[15px] text-[#727272]">
              Enter your email address and we’ll send you a reset code
            </p>
            <div className="text-start ">
              <label htmlFor="email" className="text-[14px]">Email Address</label>
              <input
                placeholder="Enter your email address"
                className="w-full h-11 px-3 mt-2 rounded-lg text-[#4F4F4F] text-sm bg-[#E6E6E6] focus:outline-[#1D6ECC]"
              />
            </div>

            <button
              onClick={() => setStep("otp")}
              className="w-full h-11 rounded-lg bg-[#1D6ECC] hover:bg-blue-700 text-white text-[15px] font-medium"
            >
              Send Reset Code
            </button>
          </div>
        )}

        {/* ===================== OTP SCREEN ===================== */}
        {step === "otp" && (
          <div className="text-center space-y-[18px]">
            <div className="flex items-center justify-center mx-auto">
              <img src="/assets/Mail.png" alt="" />
            </div>

            <p className="text-4">Enter Reset Code</p>

            <p className="text-[15px] text-[#727272]">
              We’ve sent a 6-digit code to <br />
              <span className="text-gray-600">michaeloyedele@gmail.com</span>
            </p>

            <div className="flex justify-center gap-3 mt-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className={`w-12 h-12 rounded-lg text-center text-xl border border-[#B9B9B9] focus:outline-[#1D6ECC]
                    ${error ? "border-red-500 text-red-500" : ""}
                  `}
                />
              ))}
            </div>

            {error && (
              <p className="text-red-500 text-sm -mt-3 text-start mx-4">
                Wrong code
              </p>
            )}

            <p className="text-[15px] text-[#727272]">
              Didn’t receive the code?
              <span className="text-[#1D6ECC] cursor-pointer"> Resend</span>
            </p>

            <button
              onClick={handleVerify}
              className={`w-full h-11 rounded-lg text-[15px] text-white cursor-pointer
                ${
                  otp.join("").length === 6
                    ? "bg-[#1D6ECC] hover:bg-blue-700"
                    : "bg-[#D2DFEE] cursor-not-allowed"
                }
              `}
              disabled={otp.join("").length !== 6}
            >
              Verify Code
            </button>
          </div>
        )}

        {/* ===================== RESET PASSWORD FORM ===================== */}
        {step === "reset" && (
          <div className="text-center space-y-[18px]">
            <div className="flex items-center justify-center mx-auto">
              <img src="/assets/Lock.png" alt="" />
            </div>

            <p className="text-4">Reset Password</p>

            <p className="text-[15px] text-[#727272]">
              Create a new password for your account
            </p>

            {/* PASSWORD */}
            <div className="text-left space-y-2">
              <label className="text-[14px]">New Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-11 px-3 rounded-lg bg-[#E6E6E6] text-sm focus:outline-[#1D6ECC]"
                value={passwords.password}
                onChange={(e) =>
                  handlePasswordChange("password", e.target.value)
                }
              />
            </div>

            {/* CONFIRM */}
            <div className="text-left space-y-2">
              <label className="text-[14px]">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-11 px-3 rounded-lg bg-[#E6E6E6] text-sm focus:outline-[#1D6ECC]"
                value={passwords.confirm}
                onChange={(e) =>
                  handlePasswordChange("confirm", e.target.value)
                }
              />
            </div>

            {passError && (
              <p className="text-red-500 text-sm text-start">{passError}</p>
            )}

            <button
              onClick={finishReset}
              disabled={!canReset}
              className={`w-full h-11 rounded-lg text-[15px] text-white
                ${
                  canReset
                    ? "bg-[#1D6ECC] hover:bg-blue-700 cursor-pointer"
                    : "bg-[#D2DFEE] cursor-not-allowed"
                }
              `}
            >
              Reset Password
            </button>
          </div>
        )}

        {/* ===================== SUCCESS ===================== */}
        {step === "success" && (
          <div className="text-center space-y-[18px]">
            <div className="flex items-center justify-center mx-auto">
              <img src="/assets/Confetti.png" alt="" />
            </div>

            <p className="text-4">Password Reset Successfully</p>

            <p className="text-[15px] text-[#727272]">
              You can now log in using your new password.
            </p>

            <button className="w-full h-11 rounded-lg bg-[#1D6ECC] hover:bg-blue-700 text-white text-[15px] font-medium cursor-pointer">
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
