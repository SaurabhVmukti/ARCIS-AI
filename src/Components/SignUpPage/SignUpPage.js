import React from "react";
import styles from './SignUpPage.module.css';
import InputField from './InputField';
import Button from './Button';
import GoogleSignIn from './GoogleSignIn';
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const navigate = useNavigate();
    
    const loginclick = () => {
        navigate('/');
    }

    const otpclick = () => {
        navigate('/otp');
    }

    return (
        <main className={styles.signupPage}>
            <div className={styles.contentWrapper}>
                <section className={styles.imageSection}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cadae3544d2e6a3ad6aafa7ad59b08c3216909ee850a29208e6a388b548619a?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="Company logo" className={styles.logo} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e89dcd26fb36c610edd0b3a5649600f5eb33adcce157892954bff128b10534c?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="Illustration" className={styles.illustration} />
                </section>
                <section className={styles.formSection}>
                    <header className={styles.formHeader}>
                        <div>
                            <h1 className={styles.title}>Get Started</h1>
                            <p className={styles.subtitle}>
                                Please enter your details and get access to your digital vision.
                            </p>
                        </div>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/543c58ff5f727b386d9281e4a523c455777873a53a82b8699988dda34feef573?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.decorativeIcon} />
                    </header>
                    <form className={styles.signupForm}>
                        <InputField
                            label="Email/Mobile number"
                            placeholder="Enter your email/ mobile number"
                            type="text"
                        />
                        <InputField
                            label="Create Password"
                            placeholder="••••••••"
                            type="password"
                        />
                        <div className={styles.formOptions}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" />
                                <span>Remember for 30 days</span>
                            </label>
                            <Button variant="text">Forgot password</Button>
                        </div>
                        <Button variant="primary" fullWidth onClick={otpclick}>Send OTP</Button>
                    </form>
                    <p className={styles.loginPrompt}>
                        Already have an account?
                        <Button variant="text" onClick={loginclick}>Login</Button>
                    </p>
                    <div className={styles.divider}>OR</div>
                    <GoogleSignIn />
                </section>
            </div>
        </main>
    );
}

export default SignUpPage;
