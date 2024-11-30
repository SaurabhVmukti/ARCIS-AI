import React from "react";
import styles from './InputField.module.css';

function InputField({ label, placeholder, type }) {
  return (
    <div className={styles.inputField}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default InputField;