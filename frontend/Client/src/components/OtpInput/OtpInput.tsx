import React, { useEffect, useRef, useState } from "react";
import "./OtpInput.css";

interface OtpInputProps {
  length?: number;
  onOtpSubmit?: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    const currentRef = inputRefs.current[index];
    currentRef?.setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      const firstEmptyIndex = otp.indexOf("");
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
    <div className="otp">
     <div className="otp-box">
      <h2>Enter OTP</h2>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
            maxLength={1}
          />
        ))}
      </div>
    </div>
    </div>
    </>
   
  );
};

export default OtpInput;
