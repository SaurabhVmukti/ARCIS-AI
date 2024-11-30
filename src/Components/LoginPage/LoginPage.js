import React from 'react';
import styles from './LoginPage.module.css';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

  const signinclick =() =>{
    navigate('/signup');
};
const loginclick = () => {
  navigate('/dashboard');
};

  return (
    <main className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cadae3544d2e6a3ad6aafa7ad59b08c3216909ee850a29208e6a388b548619a?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" className={styles.logo} alt="Company logo" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e89dcd26fb36c610edd0b3a5649600f5eb33adcce157892954bff128b10534c?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" className={styles.mainImage} alt="Decorative login page" />
          </div>
        </section>
        <section className={styles.formColumn}>
          <div className={styles.formContainer}>
            <header className={styles.headerWrapper}>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>Log in</h1>
                <p className={styles.subtitle}>
                  Welcome back! Please enter your details and get access to your digital vision.
                </p>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/543c58ff5f727b386d9281e4a523c455777873a53a82b8699988dda34feef573?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" className={styles.headerIcon} alt="" />
            </header>
            <form>
              <InputField label="Email" placeholder="Enter your email" type="email"/>
              <InputField label="Password" placeholder="••••••••" type="password" />
              <div className={styles.rememberForgotWrapper}>
                <div className={styles.checkboxWrapper}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxBase} role="checkbox" tabIndex="0" aria-checked="false" />
                  </div>
                  <label className={styles.checkboxLabel}>Remember for 30 days</label>
                </div>
                <button type="button" className={styles.forgotPassword}>Forgot password</button>
              </div>
              <button type="submit" className={styles.loginButton}>
                <div className={styles.loginButtonBase} onClick={loginclick}>Log in</div>
              </button>
            </form>
            <div className={styles.signupRow}>
              <p className={styles.signupText}>Don't have an account?</p>
              <button type="button" className={styles.signupLink} onClick={signinclick}>Get started</button>
            </div>
            <p className={styles.orDivider}>OR</p>
            <button type="button" className={styles.googleSignIn}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aaa61ad725901d6eaa8c24926ae9fe7c4c4b04ba81f28acdd843139235ff8e1?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" className={styles.googleIcon} alt="" />
              <span className={styles.googleSignInText}>Sign in with Google</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;