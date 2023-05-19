"use client";

import styles from "./page.module.css";
import Project from "./../Project/page";
import { useEffect, useState } from "react";

export default function Projects() {
    let iconMap: Object = {
        "react": "/Icons/Front-End/react.webp",
        "next": "/Icons/Front-End/next.jpg",
        "ts": "/Icons/Front-End/ts.png",
        "js": "/Icons/Front-End/js.png",
        "node": "/Icons/Front-End/node.webp",
        "css": "/Icons/Front-End/css.png",
        "html": "/Icons/Front-End/html.jpg",
        "cpp": "/Icons/Languages/cpp.png",
        "cs": "/Icons/Languages/cs.jpg",
        "java": "/Icons/Languages/java.png",
        "python": "/Icons/Languages/python.png"
    }

    let [projectList, setProjectList] = useState<Array<Object> | null>(null);

    useEffect(() => {
        async function setData() {
            fetch("/api/projects.json")
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    setProjectList(json);
                })
        }
        setData();
    }, [])

    return <div className={styles.projects}>
        {/* Heading */}
        <h2> Projects </h2>

        {/* Project List */}
        <div>
            {projectList === null ? <p> Loading... </p> : 
            projectList.map((projectData: Object) => {
                return <Project
                    data={projectData}
                    iconMap={iconMap}
                />
            })}
        </div>
    </div>
}