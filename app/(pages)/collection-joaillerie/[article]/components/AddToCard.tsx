'use client'

import Image from "next/image";
import React from "react";

// Composant pour ajouter un article au panier
export default function AddToCard({ article, onClose }: { article: any, onClose: () => void }) {
    return (
        <div className="flex flex-col items-start justify-start gap-8 px-8 md:px-24 lg:px-32 py-6">
            <div className="flex flex-col items-start justify-start gap-8 w-full">
                <div className="flex items-center justify-between">
                    <p className="text-3xl">Article ajouté au panier</p>
                    <button aria-label="Fermer le panier" className="absolute top-8 right-8" onClick={onClose}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-start justify-between w-full gap-8">
                    <Image src={article.src} height={1000} width={1000} alt={article.alt} className="w-36 h-36 object-cover" />
                    <div className="flex flex-col items-start justify-between h-36 ">
                        <div className="flex flex-col items-start justify-start w-full">
                            <p className="text-2xl font-semibold">{article.title}</p>
                            <p className="text-xl">Couleur : or</p>
                            <p className="text-xl">Qté : 1</p>
                            <p className="text-xl text-semibold">{article.price}</p>
                        </div>
                        <div>
                            <button className="underline upp">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-8 w-full">
                <div className="flex items-center justify-between w-full">
                    <p className="font-semibold">Sous-total</p>
                    <p className="font-semibold">{article.price}</p>
                </div>
                <div className="flex flex-col items-start justify-start gap-4 w-full text-lg">
                    <button className="bg-gray-800 w-full text-white px-4 py-2 border border-transparent hover:border-black hover:bg-white hover:text-black transition-all duration-300 u">Commander maintenant</button>
                    <button onClick={onClose} className="bg-white w-full text-black px-4 py-2 border border-black hover:bg-gray-100 transition-all duration-300">Continuer mes achats</button>
                </div>
            </div>
        </div>
    );
}