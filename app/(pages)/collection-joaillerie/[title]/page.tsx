// Fichier: page.tsx

import { StaticImageData } from 'next/image'; // Ajout de l'importation
import { images } from '../imagesData';
import ClientProductPage from './components/ClientProductPage';

export interface ImageProps {
    src: string | StaticImageData; // Modification pour accepter StaticImageData
    alt: string;
    title: string;
    price: string;
}

// Générer les chemins statiques
export async function generateStaticParams() {
    return images.map(image => ({
        title: encodeURIComponent(image.title) // Encodage des titres
    }));
}

// Récupérer les données statiques
export async function getImageData(encodedTitle: string) {
    const title = decodeURIComponent(encodedTitle); // Décodage des titres
    return images.find(img => img.title === title);
}

// Composant de la page produit
export default function ProductPage({ params }: { params: { title: string } }) {
    return <ClientProductPage title={params.title} />;
}