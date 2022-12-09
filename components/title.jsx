import styles from "./title.module.css";
import { FaArrowCircleDown } from "@react-icons/all-files/fa/FaArrowCircleDown";


const Title = () => {
return (
    
    <div className={styles.container}>
        <div className={styles.background}>
            <img src="home.png" alt="Background Image - Bulb" className={styles.home_img} />
            
            <div className={styles.text}>
                <div className={styles.title1}>
                    Q<div className={styles.title}>uik.re</div>
                </div>
                <p>Search thousands of research and thesis papers.</p>
                <form className={styles.search_box}>
                    <input className={styles.search} type="text" name="search"/>
                    <img src="search_icon.png" className={styles.search_icon} />
                </form>
            </div>
            
            <h2 className={styles.menu}><FaArrowCircleDown/></h2>            
        </div>
    </div>
);
};

export default Title;