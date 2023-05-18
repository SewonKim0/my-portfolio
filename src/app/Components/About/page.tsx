import styles from "./page.module.css";

export default function About() {
    return <div className={styles.about}>
        {/* Text */}
        <div className={styles.text}>
            <h3> About Me </h3>
            <p> I am an artist who appreciates the beauty of creativity. I am fascinated in bringing my ideas into computer science. </p>
        </div>

        {/* Image */}
        <div className={styles.image}>
            <img 
                src="/me.jpg"
                width="100%"
                height="100%"
                alt="Image of me playing a piano"
            />
        </div>
    </div>
}