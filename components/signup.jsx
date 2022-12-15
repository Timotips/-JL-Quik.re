import styles from "./signup.module.css";
import Button from "./button";
import Image from 'next/image'
import Link from "next/link";

const Signup  = () => {
    return (

        <div className={styles.fckingshit}>
            <div className={styles.container}>
                <div className={styles.divisions}>
                    <div className={styles.image_box}>
                        <Image src="/book.png" width={'1110'} height={'952'} alt={'Book Image'} className={styles.image}  />
                        <div className={styles.context}>
                            <Image src="/signup.png" width={'848'} height={'138'} alt={'Sign In Now'} className={styles.singup} />
                        </div>
                    </div>

                    <div className={styles.signupbox}>
                        <Image src="/user_img.png" width={'137'} height={'126'} alt={'User Icon'} className={styles.user_icon}  />
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
                                <Link href="/" className={styles.login_button}>Log In</Link>
                            </div>
                        </div>     
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default Signup;