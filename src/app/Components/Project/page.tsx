import styles from "./page.module.css";
import { NextPage } from "next";

//interface: project data
export interface ProjectData {
    name: string;
    text: string;
    imgPath: string;
    icons: string[];
    url:  string;
}
//interface: iconMap
export interface IconMap {
    [name: string]: string;
}

//interface: project props
interface ProjectProps {
    data: ProjectData | null;
    iconMap: IconMap | null;
}

const Project: NextPage<ProjectProps> = ({data, iconMap}) => {
    //unpack data
    if (data === null) {
        return <p> ERROR: DATA IS NULL </p>;
    }
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

export default Project;