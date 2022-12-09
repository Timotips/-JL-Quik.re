import styles from "./features.module.css";

const Features  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxes}>
                <img src="globe.png" className={styles.icons} />
                <p>Browse thousands of research and thesis papers.</p>
            </div>
            <div className={styles.boxes}>
                <img src="upload-download.png" className={styles.icons} />
                <p>Upload your work or download anything that you like.</p>

            </div>
            <div className={styles.boxes}>
                <img src="navigation.png" className={styles.icons} />
                <p>Navigate to your own preference to the user friendly</p>
            </div>
        </div>
    )
}
export default Features;