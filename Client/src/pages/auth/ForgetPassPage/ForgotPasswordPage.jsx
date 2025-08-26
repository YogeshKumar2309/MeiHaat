import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNext = () => {
    if (step === 1 && email) setStep(2);
  };

  const handleReset = () => {
    alert(`Password for ${email} has been reset to: ${newPassword}`);
    setStep(1);
    setEmail("");
    setNewPassword("");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-base-200 pt-10">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-5">

        {/* Stepper */}
        <div className="flex justify-between mb-5">
          <div className={`font-bold ${step === 1 ? "text-primary" : "text-gray-400"}`}>1. Enter Email</div>
          <div className={`font-bold ${step === 2 ? "text-primary" : "text-gray-400"}`}>2. Reset Password</div>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-control mt-4">
              <button className="btn btn-primary" onClick={handleNext}>Send Reset Link</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="input input-bordered"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="form-control mt-4">
              <button className="btn btn-primary" onClick={handleReset}>Reset Password</button>
            </div>
          </div>
        )}

        {/* Back to login */}
        <p className="text-center text-sm mt-4">
          Remember your password? 
          <Link to="/auth/login" className="text-primary ml-1">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;
