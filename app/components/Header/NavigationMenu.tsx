// NavigationMenu.tsx
// Composant de menu de navigation

import React from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlinePinterest } from "react-icons/ai";
import { CiFacebook, CiInstagram } from "react-icons/ci";

interface NavigationMenuProps {
    isMenuOpen: boolean;
    handleCloseMenu: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isMenuOpen, handleCloseMenu }) => {
    const pathname = usePathname();

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
        const isActive = pathname === href;
        return (
            <a
                href={href}
                className={`text-2xl py-2 transition-opacity hover:text-gray-400 duration-500 ${
                    isMenuOpen ? 'opacity-100 delay-[300ms]' : 'opacity-0'
                } ${isActive ? 'text-gray-400' : ''}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {children}
            </a>
        );
    };

    return (
        <nav id="menu" className={`fixed flex flex-col justify-between left-0 top-0 h-[100dvh] bg-gray-800 text-white transition-transform duration-500 ease-in-out z-50 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
            <div className="flex flex-col items-start justify-start gap-8 px-8 md:px-24 lg:px-32 py-6">
                <button aria-label="Close Menu" className="absolute top-8 right-8" onClick={handleCloseMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className={`text-4xl font-semibold font-valkyrie translate-y-1 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}>Éminence</h2>
                <div className="flex flex-col items-start justify-start gap-2">
                    <NavLink href="/">Accueil</NavLink>
                    <NavLink href="/collection-joaillerie">Collection joaillerie</NavLink>
                    <NavLink href="/la-maison-eminence">La maison Éminence</NavLink>
                </div>
            </div>
            <div className={`flex items-center justify-center gap-4 text-2xl py-4 w-full transition-opacity duration-700 ${isMenuOpen ? 'opacity-100 delay-[500ms]' : 'opacity-0'}`} >
                <a className="hover:text-gray-400" href="/instagram" rel="noopener noreferrer">
                    <CiInstagram aria-label="Instagram" />
                </a>
                <a className="hover:text-gray-400" href="/facebook" rel="noopener noreferrer">
                    <CiFacebook aria-label="Facebook" />
                </a>
                <a className="hover:text-gray-400" href="/pinterest" rel="noopener noreferrer">
                    <AiOutlinePinterest aria-label="Pinterest" />
                </a>
            </div>
        </nav>
    );
};

export default NavigationMenu;