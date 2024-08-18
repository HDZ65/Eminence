// Fichier: ClientProductPage.tsx

'use client'; // Indique que c'est un composant client
import image4 from '@/public/4.jpg';
import image5 from '@/public/5.jpg';
import image7 from '@/public/7.jpg';
import image8 from '@/public/8.jpg';   
import image10 from '@/public/10.jpg';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../../components/Header/Header';
import { ImageProps } from '../page';  
import EmblaCarousel from '@/app/components/Carousel/Carousel';
import { images } from '../../imagesData'; // Importation des données d'images

interface ClientProductPageProps {
    title: string;
}

export default function ClientProductPage({ title }: ClientProductPageProps) {
    const slides = [
        {
          image: image4,
          title: "Parure Audacieuse",
          description: "Une parure audacieuse pour vos soirées. Portez les regards sur vous avec notre parure piquante en or 18 carats.",
          link: "/",
        },
        {
          image: image5,
          title: "Boucle d'oreille ",
          description: "La douceur de l'or 18 carats. Les classiques et l'élégance à chaque étape de votre vie.",
          link: "/",
        },
        {
          image: image7,
          title: "Bague \"Abysses\"",
          description: "Les détails jusqu'au bout des doigts. Les belles choses sont parfois les plus simples.",
          link: "/",
        },
        {
          image: image8,
          title: "Collier or rose et diamant",
          description: "L'élégance de l'or rose avec des diamants. Une pièce unique pour une personne unique.",
          link: "/",
        },
        {
          image: image10,
          title: "Bracelet \"Chaine d'orée\"",
          description: "Un bracelet avec du carractère et de la classe. Affirmez votre personnalité avec ce bracelet en or 18 carats.",
          link: "/",
        },
      ];
    const [image, setImage] = useState<ImageProps | null>(null);

    useEffect(() => {
        const data = images.find(img => img.title === title);
        if (data) {
            setImage(data);
        } else {
            console.error("Les données récupérées ne correspondent pas à ImageProps");
        }
    }, [title]);

    if (!image) {
        return <div>Image non trouvée</div>;
    }

    return (
        <div>
            <Header />
            <main className="container flex flex-col gap-12 md:gap-16 lg:gap-20 mx-auto px-4 md:px-6 lg:px-20  py-12 md:py-20">
                <section className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-16 h-[60rem]">
                    <div className="w-full h-full md:w-1/2">
                        <Image src={image.src} alt={image.alt} width={1000} height={1000} className="object-cover w-full h-full" />
                    </div>
                    <div className=" flex justify-center items-center w-full md:w-1/2 h-full">
                        <div className='flex flex-col gap-12'>
                            <div className='flex flex-col gap-4 border-b border-black pb-4'>
                                <h1 className="text-3xl font-semibold">{image.title}</h1>
                                <p className=" text-2xl ">{image.price}</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-xl'><span className="font-semibold">Couleur:</span> Gold</p>
                                <p className='text-xl'><span className="font-semibold">Matière:</span> Or 18 carats</p>
                            </div>
                            <button className="bg-gray-800 text-white px-4 py-2 text-center w-full text-xl hover:bg-transparent border hover:border-black hover:text-black transition-all duration-500">Ajouter au panier</button>
                            <div className='flex flex-col gap-4'>
                                <button className=" w-fit hover:underline">Disponibilité en boutique</button>
                                <button className=" w-fit hover:underline">Détails de produit</button>
                                <button className=" w-fit hover:underline">Livraison et retours gratuits</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col gap-8  lg:gap-12">
                    <h1 className="text-4xl ">Ces pièces peuvent vous intéresser :</h1>
                    <EmblaCarousel slides={slides} />
                </section>
                <p className="text-center text-lg border-b border-black py-8">
                    <Link className="border-b border-black" href="/">Éminence</Link> / <Link className="border-b border-black" href="/collection-joaillerie">Collection joaillerie</Link> / {image.title}
                </p>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Éminence. Tous droits réservés.</p>
                    <p>Développé par <Link className="underline" href="https://www.linkedin.com/in/alexandre-hernandez-392603309/">Alexandre Hernandez</Link></p>
                </div>
            </footer>
        </div>
    );
}