import styles from "./page.module.css";

export default function Skills() {
    return <div className={styles.skills}>
        {/* Languages */}
        <div>
            <h3> Languages </h3>
            <div className={styles.icons}>
                {/* Python */}
                <div>
                    <img 
                        src="/Icons/Languages/python.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of python"
                        title="Python"
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

                {/* Java */}
                <div>
                    <img 
                        src="/Icons/Languages/java.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of java"
                        title="Java"
                    />
                </div>

                {/* C Sharp */}
                <div>
                    <img 
                        src="/Icons/Languages/cs.jpg"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of C sharp"
                        title="C#"
                    />
                </div>

                {/* C++ */}
                <div>
                    <img 
                        src="/Icons/Languages/cpp.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of C++"
                        title="C++"
                    />
                </div>
            </div>
        </div>

        {/* Front End */}
        <div>
            <h3> Front End Frameworks </h3>
            <div className={styles.icons}>
                {/* React */}
                <div>
                    <img 
                        src="/Icons/Front-End/react.webp"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of react.js"
                        title="React.js"
                    />
                </div>

                {/* Next */}
                <div>
                    <img 
                        src="/Icons/Front-End/next.jpg"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of next.js"
                        title="Next.js"
                    />
                </div>

                {/* Node */}
                <div>
                    <img 
                        src="/Icons/Front-End/node.webp"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of node.js"
                        title="Node.js"
                    />
                </div>

                {/* Typescript */}
                <div>
                    <img 
                        src="/Icons/Front-End/ts.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of typescript"
                        title="Typescript"
                    />
                </div>

                {/* Javascript */}
                <div>
                    <img 
                        src="/Icons/Front-End/js.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of javascript"
                        title="Javascript"
                    />
                </div>

                {/* CSS */}
                <div>
                    <img 
                        src="/Icons/Front-End/css.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of CSS3"
                        title="CSS"
                    />
                </div>

                {/* HTML */}
                <div>
                    <img 
                        src="/Icons/Front-End/html.jpg"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of html5"
                        title="HTML"
                    />
                </div>
            </div>
        </div>

        {/* Development Environments */}
        <div>
            <h3> Development Environments </h3>
            <div className={styles.icons}>
                {/* Visual Studio Code */}
                <div>
                    <img 
                        src="/Icons/Development-Environments/vscode.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of visual studio code"
                        title="Visual Studio Code"
                    />
                </div>

                {/* Visual Studio */}
                <div>
                    <img 
                        src="/Icons/Development-Environments/vs.webp"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of visual studio"
                        title="Visual Studio"
                    />
                </div>

                {/* Android Studio */}
                <div>
                    <img 
                        src="/Icons/Development-Environments/android-studio.png"
                        width="auto"
                        height="100%"
                        alt="Image of the icon of android studio"
                        title="Android Studio"
                    />
                </div>
            </div>
        </div>
    </div>
}