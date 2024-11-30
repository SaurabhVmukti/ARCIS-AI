import React from 'react';
import styles from './LoginPage.module.css';

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className={styles.inputField}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputWithLabel}>
          <label htmlFor={`${label.toLowerCase()}Input`} className={styles.label}>{label}</label>
          <div className={styles.input}>
            <input
              type={type}
              id={`${label.toLowerCase()}Input`}
              className={styles.inputContent}
              placeholder={placeholder}
              aria-label={label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;