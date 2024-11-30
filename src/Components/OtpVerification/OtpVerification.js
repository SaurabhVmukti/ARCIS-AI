import React, { useState, useEffect, useRef } from 'react';
import styles from './OtpVerification.module.css';
import OtpInput from './OtpInput';
import { useNavigate } from 'react-router-dom';
const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index]) {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus(); // Focus previous input
      }
    }
  };
  
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    // Focus the next input if the current value is filled
    if (value && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  
  const handleResendOtp = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setIsResendDisabled(true);
  };

  const navigate = useNavigate();
  const verifyclick = () =>{
    navigate('/dashboard');
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>OTP Verification</h1>
        <p className={styles.description}>
          Enter the 6-digit OTP sent to abc.adiance@gmail.com
        </p>
        <div className={styles.otpInputContainer}>
          {otp.map((digit, index) => (
            <OtpInput
              key={index}
              value={digit}
              onChange={handleOtpChange}
              index={index}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <p className={styles.resendText}>
          Resend OTP in: {timer < 10 ? `00:0${timer}` : `00:${timer}`}
        </p>
        <button 
          className={styles.verifyButton}
          onClick={() => console.log("Verify OTP:", otp.join(''))}
        >
          <span className={styles.buttonBase} onClick={verifyclick}>Verify</span>
        </button>
        <button 
          className={styles.resendButton}
          onClick={handleResendOtp}
          disabled={isResendDisabled}
        >
          Resend OTP
        </button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccbc3a17116cc2d0d026ce08429fb890aed369a9181bc5f364e4f794754c6f5?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1"
          className={styles.logo}
          alt="Company logo"
        />
      </div>
    </main>
  );
};

export default OtpVerification;