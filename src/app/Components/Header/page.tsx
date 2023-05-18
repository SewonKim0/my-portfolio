import styles from "./page.module.css";

export default function Header() {
    return (<div className={styles.header}>
        {/* Name Container */}
        <div className={styles.name}>
            <h2> Sewon Kim </h2>
        </div>

        {/* Icons Container */}
        <div className={styles.icons}>
            {/* Youtube */}
            <a
                href="https://www.youtube.com/channel/UCOkuvvVxC3kBF26IcPeJk9g">
                <img 
                    src="/Icons/youtube.png"
                    width="auto"
                    height="100%"
                    alt="An image of the youtube icon"
                    title="Youtube"
                />
            </a>

            {/* Linkedin */}
            <a
                href="https://www.linkedin.com/in/sewon-kim-b0285423b/">
                <img 
                    src="/Icons/linkedin.png"
                    width="auto"
                    height="100%"
                    alt="An image of the linkedin icon"
                    title="Linkedin"
                />
            </a>

            {/* Github */}
            <a
                href="https://github.com/SewonKim0">
                <img 
                    src="/Icons/github.png"
                    width="auto"
                    height="100%"
                    alt="An image of the github icon"
                    title="Github"
                />
            </a>
        </div>
    </div>);
}