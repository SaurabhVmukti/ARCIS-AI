import React, { forwardRef } from 'react';
import styles from './OtpInput.module.css';

const OtpInput = forwardRef(({ value, onChange, onKeyDown, index }, ref) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Allow only a single digit (0-9)
    if (/^\d?$/.test(inputValue)) {
      onChange(inputValue, index);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        maxLength={1}
        aria-label={`OTP digit ${index + 1}`}
        ref={ref}
      />
    </div>
  );
});

export default OtpInput;