import styles from "./signup.module.css";
import Button from "./Button";

const Signup  = () => {
    return (

        <div className={styles.fckingshit}>
            <div className={styles.container}>
                <div className={styles.divisions}>
                    <div className={styles.image_box}>
                        <img src="book.png"className={styles.image}  />
                        <div className={styles.context}>
                            <img src="signup.png" className={styles.singup} />
                        </div>
                    </div>
                    <div className={styles.signupbox}>
                        <img src="user_img.png"className={styles.user_icon}  />
                        <div className={styles.categories}>
                            <p className={styles.requirements}>Fullname:</p>
                            <input className={styles.input} type="text" name="input_box" />
                        </div>
                        <div className={styles.categories}>
                            <p className={styles.requirements}>Username:</p>
                            <input className={styles.input} type="text" name="input_box" />
                        </div>
                        <div className={styles.categories}>
                            <p className={styles.requirements}>Email:</p>
                            <input className={styles.input} type="text" name="input_box" />
                        </div>
                        <div className={styles.categories}>
                            <p className={styles.requirements}>Password:</p>
                            <input className={styles.input} type="text" name="input_box" />
                        </div>  
                        <p className={styles.terms}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</p>
                        <div className={styles.signup_btn}>
                            <Button variant="primary">Sign In</Button>
                        </div>
                        <div className={styles.login}>
                            <p className={styles.login_msg}>Already have an account?</p>
                            <div className={styles.login_btn}>
                                <a href="/" className={styles.login_button}>Log In</a>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default Signup;