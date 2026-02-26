import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputTopLabelSecure = ({
  label,
  info,
  type = "text",
  placeholder,
  isRequired,
  isOptional,
  className = "mb-1"
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={className}>
      <label className="form-label">
        {label}
        {isRequired && <span className="text-danger">*</span>}
        {isOptional && (
          <span className="fw-normal text-muted text-capitalize">
            {" "}
            (Optional)
          </span>
        )}
      </label>

      <div className="position-relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className="form-control pe-5"
          placeholder={placeholder}
        />

        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </span>
        )}
      </div>

      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

export default InputTopLabelSecure;