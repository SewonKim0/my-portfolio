"use client";

import styles from "./page.module.css";
import Project from "./../Project/page";
import { ProjectData, IconMap } from "./../Project/page";
import { useEffect, useState } from "react";

export default function Projects() {
    //iconMap: useState
    let [iconMap, setIconMap] = useState<IconMap | null>(null);
    //projectList: useState
    let [projectList, setProjectList] = useState<ProjectData[] | undefined>();

    useEffect(() => {
        async function setData() {
            //load projectList from api
            fetch("/api/projects.json")
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    setProjectList(json);
                })

            //load iconMap from api
            fetch ("/api/icon-map.json")
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    setIconMap(json);
                })
        }
        setData();
    }, [])

    return <div className={styles.projects}>
        {/* Heading */}
        <h2> Projects </h2>

        {/* Project List */}
        <div>
            {projectList === undefined ?
            //if projectList undef: Loading message
            <p> Loading... </p> :
            //else: Render projectList
            projectList.map((data: ProjectData, index: number) => {
                return <Project
                    data={data}
                    iconMap={iconMap}
                    key={index}
                />
            })
            }
        </div>
    </div>
}