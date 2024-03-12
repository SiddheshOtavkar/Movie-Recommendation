import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {

    // Check if src is a string
    // if (typeof src !== "string") {
    //     console.error("Error: src prop must be a string.");
    //     return null; // Return null or a placeholder if src is not a string
    // }

    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;