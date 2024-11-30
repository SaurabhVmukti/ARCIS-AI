import React from "react";
import styles from './Button.module.css';

function Button({ children, variant = "text", fullWidth = false, ...props }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;