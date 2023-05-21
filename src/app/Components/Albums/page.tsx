"use client"

import styles from "./page.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Albums() {
    //interface: Album Object
    interface Album {
        name: string;
        description: string;
        imgPath: string;
    }

    //states: albumList, albumIndex
    let [albumList, setAlbumList] = useState<Album[] | null>(null);
    let [albumIndex, setAlbumIndex] = useState<number>(0);
    
    //initial useEffect: Set albumList by api data
    useEffect(() => {
        fetch("/api/albums.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setAlbumList(json);
            })
    }, [])

    return <div className={styles.albums}>
        {/* Title */}
        <h3> Albums </h3>

        {/* Options */}
        <div className={styles.options}>
            {/* Left */}
            <button
                //Click: Go Left
                onClick={() => {
                    //if albumList is null, stop
                    if (albumList === null) {
                        return;
                    }
                    //else: update index
                    setAlbumIndex(albumIndex === 0 ?
                        (albumIndex - 1 + albumList.length) & albumList.length :
                        (albumIndex - 1) % albumList.length);
                }}>
                <BiChevronLeft />
            </button>

            {/* Display: Loading or Image */}
            {albumList === null ?
                <p> Loading... </p> :
                <div>
                    <img
                        src={albumList[albumIndex].imgPath}
                        width="100%"
                        height="auto"
                        alt={"Image of the cover for " + albumList[albumIndex].name}
                    />
                </div>
            }

            {/* Right */}
            <button
                //Click: Go Right
                onClick={() => {
                    //if albumList is null, stop
                    if (albumList === null) {
                        return;
                    }
                    //else: update index
                    setAlbumIndex((albumIndex + 1) % albumList.length);
                }}>
                <BiChevronRight />
            </button>
        </div>

        {/* Text */}
        <p> 
            <span> {albumList === null ? 
                "Loading..." : 
                albumList[albumIndex].name + ": "} 
            </span> 
            {albumList === null ? 
            "Loading..." :
            albumList[albumIndex].description}
        </p>
    </div>
}