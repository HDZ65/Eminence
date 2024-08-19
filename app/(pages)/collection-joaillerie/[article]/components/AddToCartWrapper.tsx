'use client'

import { useState } from 'react';
import AddToCard from './AddToCard';

export default function AddToCartWrapper({ article }: { article: any }) {
    const [isAddToCartVisible, setAddToCartVisible] = useState(false);

    const handleAddToCart = () => {
        setAddToCartVisible(true);
    };

    const handleCloseAddToCart = () => {
        setAddToCartVisible(false);
    };

    return (
        <>
            <button 
                onClick={handleAddToCart} 
                className="bg-gray-800 text-white border border-black px-6 py-2 w-full text-center hover:bg-transparent hover:text-black transition-colors duration-300 text-lg"
                aria-expanded={isAddToCartVisible}
                aria-controls="panier"
            >
                Ajouter au panier
            </button>
            <div 
                id="panier" 
                className={`fixed flex flex-col justify-between right-0 top-0 h-[100dvh] bg-white transition-transform duration-500 ease-in-out z-50 ${isAddToCartVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                aria-hidden={!isAddToCartVisible}
            >
                <AddToCard article={article} onClose={handleCloseAddToCart} />
            </div>
        </>
    );
}