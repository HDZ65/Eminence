// Header.tsx
"use client"

import Link from "next/link";
import React, { useState, useRef } from "react";
import NavigationMenu from "./NavigationMenu";
import SearchComponent from "./SearchComponent";

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
                <div onClick={toggleSearch} className="absolute top-0 left-0 h-[100dvh] w-[100dvw] backdrop-blur-sm backdrop-brightness-[0.2] flex items-center justify-center sm:hidden z-50">
                    <div onClick={ (e) => e.stopPropagation()} className="bg-white text-lg rounded-sm flex flex-col items-center justify-center gap-2 p-4 w-4/5">
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
            <SearchComponent isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} searchRef={searchRef} />
            <NavigationMenu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
        </header >
    );
};

export default Header;