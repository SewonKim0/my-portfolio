import styles from "./page.module.css";

export default function Skills() {
    return <div className={styles.skills}>
        {/* Languages */}
        <div>
            <h3> Front-End </h3>
            <div className={styles.icons}>
                {/* React */}
                <div>
                    <img 
                        src="/Icons/Languages/react.webp"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of react.js"
                        title="React.js"
                    />
                </div>

                {/* Next */}
                <div>
                    <img 
                        src="/Icons/Languages/next.jpg"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of next.js"
                        title="Next.js"
                    />
                </div>

                {/* Node */}
                <div>
                    <img 
                        src="/Icons/Languages/node.webp"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of node.js"
                        title="Node.js"
                    />
                </div>

                {/* Typescript */}
                <div>
                    <img 
                        src="/Icons/Languages/ts.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of typescript"
                        title="Typescript"
                    />
                </div>

                {/* Javascript */}
                <div>
                    <img 
                        src="/Icons/Languages/js.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of javascript"
                        title="Javascript"
                    />
                </div>

                {/* CSS */}
                <div>
                    <img 
                        src="/Icons/Languages/css.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of CSS3"
                        title="CSS"
                    />
                </div>

                {/* HTML */}
                <div>
                    <img 
                        src="/Icons/Languages/html.jpg"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of html5"
                        title="HTML"
                    />
                </div>
            </div>
        </div>
    </div>
}