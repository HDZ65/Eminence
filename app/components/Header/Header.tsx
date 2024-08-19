// Header.tsx
"use client"

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePinterest } from "react-icons/ai";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

// Composant Header
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };



    return (
        <header className="container mx-auto p-4 px-4 md:px-6 lg:px-20 md:py-6 grid grid-cols-3 items-center">

            {/* Modal de recherche pour les petits écrans */}
            {isSearchOpen && (
                <div className="absolute top-0 left-0 h-[100dvh] w-[100dvw] backdrop-blur-sm backdrop-brightness-[0.2] flex items-center justify-center sm:hidden z-50">

                    <div className="bg-white text-lg rounded-sm flex flex-col items-center justify-center gap-2 p-4 w-4/5">
                        <div className="flex items-center justify-center gap-2 w-full">
                            <input
                                type="text"
                                aria-label="Search input"
                                className="border-b w-full border-black bg-transparent px-2 py-1 outline-none "
                                placeholder="Rechercher..."
                            />
                            <button aria-label="Search" className="" onClick={toggleSearch}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bouton Menu */}
            <div className="flex items-center justify-start space-x-4">
                <button aria-label="Open Menu" className="flex items-center space-x-2" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <span className="">Menu</span>
                </button>
            </div>

            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl text-center text-gray-800 font-valkyrie font-semibold translate-y-1">Éminence</h1>
            </Link>

            {/* Recherche et Panier */}
            <div className="flex items-center justify-end space-x-4">
                <div className="flex items-center space-x-2" ref={searchRef}>

                    {/* Input de recherche pour les écrans larges */}
                    <div className={`hidden sm:block transition-all duration-500 ${isSearchOpen ? ' w-32 md:w-40 lg:w-48  opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>
                        <input
                            type="text"
                            aria-label="Search input"
                            className="border-b border-white max-sm:text-xl sm:border-black bg-transparent px-2 py-1 md:w-full outline-none"
                            placeholder="Rechercher..."
                        />
                    </div>

                    {/* Bouton de recherche */}
                    <button aria-label="Search" className="" onClick={toggleSearch}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    {/* Bouton du panier */}
                    <button aria-label="Cart" className="">
                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6h14l1 14H4L5 6zm2 0V4a2 2 0 012-2h6a2 2 0 012 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>



            <nav id="menu" className={`fixed flex flex-col justify-between left-0 top-0 h-[100dvh] bg-gray-800 text-white transition-transform duration-500 ease-in-out z-50 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <div className="flex flex-col items-start justify-start gap-8 px-8 md:px-24 lg:px-32 py-6">
                    <button aria-label="Close Menu" className="absolute top-8 right-8" onClick={handleCloseMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className={`text-4xl font-semibold font-valkyrie translate-y-1 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}>Éminence</h2>
                    <div className="flex flex-col items-start justify-start gap-2">

                        <Link className={`text-2xl py-2 transition-opacity hover:text-gray-400 duration-500 ${isMenuOpen ? 'opacity-100 delay-[300ms]' : 'opacity-0'}`} href="/">Accueil</Link>

                        <Link className={`text-2xl py-2 transition-opacity hover:text-gray-400 duration-500 ${isMenuOpen ? 'opacity-100 delay-[400ms]' : 'opacity-0'}`} href="/collection-joaillerie">Collection joaillerie</Link>

                        <Link className={`text-2xl py-2 transition-opacity hover:text-gray-400 duration-500 ${isMenuOpen ? 'opacity-100 delay-[500ms]' : 'opacity-0'}`} href="/la-maison-eminence">La maison Éminence</Link>
                    </div>
                </div>
                <div className={`flex items-center justify-center gap-4 text-2xl py-4 w-full transition-opacity duration-700 ${isMenuOpen ? 'opacity-100 delay-[500ms]' : 'opacity-0'}`} >
                    <Link className="hover:text-gray-400" href="/instagram">
                        <CiInstagram />
                    </Link>
                    <Link className="hover:text-gray-400" href="/facebook">
                        <CiFacebook />
                    </Link>
                    <Link className="hover:text-gray-400" href="pinterest">
                        <AiOutlinePinterest />
                    </Link>
                </div>
            </nav>
        </header >
    );
};

export default Header;