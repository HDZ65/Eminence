// SearchComponent.tsx
// Composant de recherche pour le header

import React from 'react';

interface SearchComponentProps {
    isSearchOpen: boolean;
    toggleSearch: () => void;
    searchRef: React.RefObject<HTMLDivElement>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ isSearchOpen, toggleSearch, searchRef }) => {
    return (
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
    );
};

export default SearchComponent;