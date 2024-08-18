// VideoPlayer.tsx
"use client"

import Link from "next/link";
import React from "react";

const VideoPlayer = () => {
    return (
        <section className="video-container flex flex-col gap-4 items-start justify-start">
            <video width="100%" loop autoPlay muted aria-label="Vidéo de démonstration">
                <source src="/videos/my-video.mp4" type="video/mp4" />
                
                Votre navigateur ne supporte pas la balise vidéo.
            </video>
            <p className=" text-xs uppercase">Collection Printemps/Été 2024</p>
            <h2 className="text-4xl ">Laissez la mode remonter le temps.</h2>
            <Link className="border-b border-black" href="/collection-joaillerie">Voir la collection</Link>
        </section>
    );
};

export default VideoPlayer;