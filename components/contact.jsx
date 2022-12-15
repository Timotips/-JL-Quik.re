import styles from "./contact.module.css";
import {SiGmail} from "@react-icons/all-files/si/SiGmail";
import Image from 'next/image'

const Contact  = () => {
    return (
       <div className={styles.container}>
            <div className={styles.contact}>
                <h1>Contact Us</h1>

                <div className={styles.gmailicon}>
                    <Image src="/gmail.png" width={'33'} height={'34'} alt={'Gmail Icon'} className={styles.image1}/><div className={styles.gmail}>ResearchLibrary@gmail.com</div>
                </div>

                <div className={styles.phoneicon}>
                    <Image src="/telephone.png" width={'33'} height={'34'} alt={'Telephone Icon'} className={styles.image2}/><div className={styles.phone}>+63 919 2939 495</div>
                </div>

            </div>
            
            <div className={styles.socials}>
                <h1>Socials</h1>

                <div className={styles.instaicon}>
                    <Image src="/insta.png" width={'33'} height={'34'} alt={'Instagram Icon'} className={styles.image3}/><div className={styles.insta}>@Research_Library</div>
                </div>

                <div className={styles.twittericon}>
                    <Image src="/twitter.png" width={'33'} height={'34'} alt={'Twitter Icon'} className={styles.image4}/><div className={styles.twitter}>@Research_Library</div>
                </div>

            </div>

            <div className={styles.support}>
                <h1>Support</h1>
                <p>Help</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>

       </div>
       
    )
}
export default Contact;