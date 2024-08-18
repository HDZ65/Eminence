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

// Composant de la page produit
export default async function ProductPage({ params }: { params: { title: string } }) {
    const imageData = await getImageData(params.title);
    if (!imageData) {
        // Gérer le cas où l'image n'est pas trouvée
        return <div>Produit non trouvé</div>;
    }
    return <ClientProductPage title={imageData.title} />;
}

// Récupérer les données statiques
async function getImageData(encodedTitle: string) {
    const title = decodeURIComponent(encodedTitle); // Décodage des titres
    return images.find(img => img.title === title);
}