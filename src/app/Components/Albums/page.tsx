"use client"

import styles from "./page.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Albums() {
    return <div className={styles.albums}>
        {/* Title */}
        <h3> Albums </h3>

        {/* Options */}
        <div className={styles.options}>
            {/* Left */}
            <button
                //Click: Go Left
                onClick={() => {
                    alert("clicked");
                }}>
                <BiChevronLeft />
            </button>

            {/* Display */}
            <div>
                <img
                    src="/Albums/album5.jpg"
                    width="100%"
                    height="auto"
                    alt="Image of the cover for album 5"
                />
            </div>

            {/* Right */}
        </div>

        {/* Text */}
    </div>
}