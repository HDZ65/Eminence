// Header.tsx
"use client"

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

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

    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="container mx-auto p-4 px-4 md:px-6 lg:px-20 md:py-6 grid grid-cols-3 items-center">
            {/* Menu Button */}

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
            {/* Search and Cart */}
            <div className="flex items-center justify-end space-x-4">
                <div className="flex items-center space-x-2" ref={searchRef}>
                    <div className={`transition-all duration-500 ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>
                        <input
                            type="text"
                            aria-label="Search input"
                            className="border-b border-black bg-transparent px-2 py-1 w-full outline-none"
                            placeholder="Rechercher..."
                        />
                    </div>
                    <button aria-label="Search" className="" onClick={toggleSearch}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <button aria-label="Cart" className="">
                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6h14l1 14H4L5 6zm2 0V4a2 2 0 012-2h6a2 2 0 012 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <nav id="menu" className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-transform duration-500 ease-in-out z-50 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <div className="flex flex-col items-start justify-start gap-8 px-8 md:px-24 lg:px-32 py-6">
                    <button aria-label="Close Menu" className="absolute top-8 right-8" onClick={handleCloseMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className={`text-4xl font-semibold font-valkyrie translate-y-1 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}>Éminence</h2>
                    <div className="flex flex-col items-start justify-start gap-2">

                        <Link className={`text-2xl py-2 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-[300ms]' : 'opacity-0'}`} href="/">Accueil</Link>

                        <Link className={`text-2xl py-2 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-[400ms]' : 'opacity-0'}`} href="/collection-joaillerie">Collection joaillerie</Link>

                        <Link className={`text-2xl py-2 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-[500ms]' : 'opacity-0'}`} href="/la-maison-eminence">La maison Éminence</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;