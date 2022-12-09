import styles from "./about.module.css";
import Link from "next/link";


const About  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.division}>
                <div className={styles.title}>
                    <div className={styles.context}>
                        <h1 className={styles.frst_part}>A</h1>
                        <h1 className={styles.scnd_part}>bout</h1>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.d_frst_part}>Q</p>
                        <p className={styles.d_scnd_part}>uik.re is a cloud archive that keeps the content of research papers. 
                            It’s mission is to help users keep and share their ideas, research and more. </p>
                    </div>
                </div> 
                <div className={styles.about_background}>
                </div>
                
            </div>
                    <img src="about_img.png" alt="about_image-laptop" className={styles.about_img} />
            
        </div>
    )
}
export default About;