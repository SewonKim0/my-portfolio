import styles from "./page.module.css";

export default function Project(props: Object) {
    //props
    if (props === undefined) {
        return <p> Loading... </p>;
    }
    let {data, iconMap} = props;
    let {name, text, imgPath, icons, url} = data;

    return <div className={styles.project}>
        {/* Content */}
        <div className={styles.content}>
            {/* Text */}
            <div className={styles.text}>
                <a
                    href={url}> 
                    <h3> {name} </h3> 
                </a>
                <p> {text} </p>

                {/* Icons */}
                <div>
                    {icons.map((icon: string) => {
                        return <div>
                            <img
                                src={iconMap[icon]}
                                width="auto"
                                height="100%"
                                alt={"Image of the icon of " + icon}
                                title={icon}
                            />
                        </div>
                    })}
                </div>
            </div>

            {/* Image */}
            <div className={styles.image}>
                <img
                    src={imgPath}
                    width="100%"
                    height="auto"
                    alt={"Image of " + imgPath}
                />
            </div>
        </div>
    </div>
}