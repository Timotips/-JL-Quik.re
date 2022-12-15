import styles from "./features.module.css";
import Image from 'next/image'

const Features  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxes}>
                <Image src="/globe.png" width={'172'} height={'156'} alt={'Globe Image'} className={styles.icons} />
                <p>Browse thousands of research and thesis papers.</p>
            </div>

            <div className={styles.boxes}>
                <Image src="/upload-download.png" width={'238'} height={'148'} alt={'Upload and Download Image'} className={styles.icons} />
                <p>Upload your work or download anything that you like.</p>
            </div>
            
            <div className={styles.boxes}>
                <Image src="/navigation.png" width={'160'} height={'170'} alt={'Arrows Image'} className={styles.icons} />
                <p>Navigate to your own preference to the user friendly</p>
            </div>
        </div>
    )
}
export default Features;