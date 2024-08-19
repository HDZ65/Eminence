// Page principale de la collection de joaillerie

import Image from "next/image";
import Header from "../../components/Header/Header";
import React from 'react';
import Link from "next/link";
import { articles } from "./imagesData";

export default function CollectionJoaillerie() {
    return (
        <>
            <Header />
            <main className="container flex flex-col gap-12 md:gap-16 lg:gap-20 mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-20">
                <section className="flex flex-col md:flex-row gap-12 lg:gap-16">
                    <p className="w-full md:w-1/2 text-xl" aria-label="Description de la collection de joaillerie">&quot;La maison Éminence présente sa collection de joaillerie réalisée en or. La collection s&apos;appuie sur des pratiques durable qui caratérisent le luxe moderne, utilisant des techniques ancestrales et des matériaux nobles.&quot;</p>
                </section>

                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8" role="list">
                    {articles.map((article, index) => (
                        <div key={index} className={`relative group ${article.className}`} role="listitem">
                            <Link href={`/collection-joaillerie/${encodeURIComponent(article.title.replace(/\s+/g, '-'))}`} aria-label={`Voir les détails de ${article.title}`}>
                                <div className="overflow-hidden h-full w-full">
                                    <Image src={article.src} height={1000} width={1000} alt={article.alt} className={`${article.className} group-hover:brightness-75 group-hover:scale-110 transition-all duration-500`} />
                                </div>
                                <div className="absolute top-4 left-6 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-lg font-bold">{article.title}</h3>
                                    <p className="text-sm">{article.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>

                <p className="text-center text-lg border-b border-black py-8"><Link className="border-b border-black" href="/">Éminence</Link> / Collection joaillerie</p>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Éminence. Tous droits réservés.</p>
                    <p>Développé par <Link className="underline" href="https://www.linkedin.com/in/alexandre-hernandez-392603309/">Alexandre Hernandez</Link></p>
                </div>
            </footer>
        </>
    );
}