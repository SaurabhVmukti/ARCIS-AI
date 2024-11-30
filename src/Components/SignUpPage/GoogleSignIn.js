import React from "react";
import styles from './GoogleSignIn.module.css';

function GoogleSignIn() {
  return (
    <button className={styles.googleSignIn}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/559e20ac0c2194cab0ebce68d557bbfd2749232e6e852b00090ea8ff84fee923?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.googleIcon} />
      <span>Sign in with Google</span>
    </button>
  );
}

export default GoogleSignIn;