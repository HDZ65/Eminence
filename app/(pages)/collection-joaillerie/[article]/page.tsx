// Page dynamique pour afficher les détails d'un article de la collection de joaillerie

import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { articles } from '../imagesData';
import Link from 'next/link';
import Header from '@/app/components/Header/Header';
import EmblaCarousel from '@/app/components/Carousel/Carousel';

import image4 from '@/public/4.jpg';
import image5 from '@/public/5.jpg';
import image7 from '@/public/7.jpg';
import image8 from '@/public/8.jpg';
import image10 from '@/public/10.jpg';
import AddToCartWrapper from './components/AddToCartWrapper';

export default function ArticlePage({ params }: { params: { article: string } }) {
    const decodedTitle = decodeURIComponent(params.article);
    const article = articles.find(article => {
        const encodedTitle = encodeURIComponent(article.title.replace(/\s+/g, '-'));
        return encodedTitle === params.article;
    });

    if (!article) {
        return (
            <div className='flex flex-col justify-center items-center w-full h-screen text-4xl font-bold text-center'>
                <p>Mince, cet article n&apos;existe pas</p>
                <p>{`"Comparaison des titres:", ${decodedTitle}, ${params.article}`}</p>
            </div>
        );
    }

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

    return (
        <>
            <Header />
            <main className="container flex flex-col gap-12 md:gap-16 lg:gap-20 mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-20">
                <div className='flex flex-col gap-4'>
                    <p className="text-start md:text-lg "><Link className="border-b border-black" href="/">Éminence</Link> / <Link className="border-b border-black" href="/collection-joaillerie">Collection joaillerie</Link> / {article.title}</p>

                    <section className="flex flex-col justify-center items-center lg:flex-row gap-12 lg:gap-16 h-fit ">
                        <article className="w-full lg:w-1/2 lg:h-full">
                            <div className='flex flex-col w-full h-[30rem] md:h-[45rem] lg:h-[55rem] xl:h-[65rem] '>
                                <Image src={article.src} alt={article.alt} className="w-full h-full object-cover" />
                            </div>
                        </article>
                        <article className="w-full lg:w-1/2 lg:h-full">
                            <div className='flex flex-col justify-center items-center gap-6 w-full h-full lg:p-6'>
                                <div className="flex flex-col justify-start items-start gap-2 border-b border-black pb-4 w-full">
                                    <h1 className="text-3xl ">{article.title}</h1>
                                    <p className="text-lg">{article.price}</p>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2 border-b border-black pb-4 w-full">
                                    <p className=""><span className="font-bold">Composition :</span> or 18 carats et diamants</p>
                                    <p className=""><span className="font-bold">Couleur :</span> or</p>
                                    <p className=""><span className="font-bold">Poids :</span> 10 grammes</p>
                                    <p className=""><span className="font-bold">Longueur :</span> 10 cm</p>
                                    <p className=""><span className="font-bold">Largeur :</span> 3 cm</p>
                                </div>
                                <AddToCartWrapper article={article} />
                                <div className="flex flex-col justify-start items-start gap-2 w-full ">
                                    <Link className='hover:underline' href="#">Trouver ce produit en boutique</Link>
                                    <Link className='hover:underline' href="#">Détails du produit</Link>
                                    <Link className='hover:underline' href="#">Livraison et retours</Link>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <section className='flex flex-col gap-12 md:gap-16 lg:gap-20'>
                    <h2 className='text-3xl'>Voir nos autres produits</h2>
                    <EmblaCarousel slides={slides} />
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Éminence. Tous droits réservés.</p>
                    <p>Développé par <Link className="underline" href="https://www.linkedin.com/in/alexandre-hernandez-392603309/">Alexandre Hernandez </Link></p>
                </div>
            </footer>
        </>
    );
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        article: encodeURIComponent(article.title.replace(/\s+/g, '-')),
    }));
}