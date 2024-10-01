import React from 'react';
import Image from 'next/image';

// Titre principal : La Maison Éminence - Notre Histoire
const LaMaisonEminence: React.FC = () => {
    return (
        <>
            <HeroSection />
            <HistoireSection />
            <SavoirFaireSection />
            <CollectionsIconiquesSection />
            <EngagementSection />
        </>
    );
};

export default LaMaisonEminence;

// Section Héro
const HeroSection: React.FC = () => (
    <section className="relative flex flex-col justify-start items-start bg-cover bg-center h-[40dvh]">
        <Image priority src="/19.jpg" alt="La Maison Éminence" fill className="w-full h-full object-cover brightness-50 saturate-50" />
        <div className="absolute inset-0 flex flex-col justify-start items-start md:justify-center md:items-center p-6">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">La Maison Éminence</h1>
            <p className="text-xl  text-white ">Un héritage d&apos;élégance et d&apos;audace depuis 1920</p>
        </div>
    </section>
);

// Section Histoire
const HistoireSection: React.FC = () => (
    <section className="flex flex-col  md:flex-row-reverse md:gap-12 max-w-5xl ml-auto py-16">
        <div className='md:flex-1 flex flex-col justify-start items-start'>
            <h2 className="text-4xl mb-6">Notre Histoire</h2>
            <p className="mb-8 text-xl">Fondée en 1920 par la visionnaire Élise Éminence, notre maison de joaillerie est née d&apos;une passion pour la beauté et l&apos;excellence. Depuis un siècle, nous créons des bijoux qui transcendent les époques, alliant savoir-faire traditionnel et innovation créative.</p>
        </div>
        <div className="max-md:h-[300px] w-full relative md:flex-1">
            <Image 
                priority
                src="/18.jpg" 
                alt="Élise Éminence, fondatrice" 
                layout="fill"
                objectFit="cover"
                className="filter sepia brightness-75 saturate-200" 
            />
        </div>
    </section>
);


// Section Savoir-Faire
const SavoirFaireSection: React.FC = () => (
    <section className="flex flex-col  md:flex-row md:gap-12 max-w-5xl  py-16">
        <div className='md:flex-1 flex flex-col justify-start items-start'>
        <h2 className="text-4xl mb-8 text-start">Notre Savoir-Faire</h2>
        <p className="mb-12 text-xl">Chaque bijou Éminence est le fruit d&apos;un travail minutieux réalisé par nos maîtres artisans. De la sélection des pierres précieuses à la finition impeccable, nous mettons tout notre art au service de votre beauté.</p>
        </div>
        <div className="max-md:h-[300px] w-full relative md:flex-1">
        <Image src="/1.jpg" alt="Atelier Éminence" fill objectFit="cover" className="mx-auto" />
        </div>
    </section>
);

// Section Collections Iconiques
const CollectionsIconiquesSection: React.FC = () => (
    <section className="py-16 px-4 border  border-gray-300">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-8 text-center">Nos Collections Iconiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <Image src="/4.jpg" alt="Collection Audace" width={200} height={200} className="h-64 object-cover mx-auto mb-4" />
                    <h3 className="text-2xl">Audace</h3>
                </div>
                <div className="text-center">
                    <Image src="/7.jpg" alt="Collection Éternité" width={200} height={200} className="h-64 object-cover mx-auto mb-4" />
                    <h3 className="text-2xl">Éternité</h3>
                </div>
                <div className="text-center">
                    <Image src="/8.jpg" alt="Collection Lumière" width={200} height={200} className="h-64 object-cover mx-auto mb-4" />
                    <h3 className="text-2xl">Lumière</h3>
                </div>
            </div>
        </div>
    </section>
);

// Section Engagement
const EngagementSection: React.FC = () => (
    <section className="py-16 px-4 max-w-6xl ">
        <h2 className="text-4xl mb-8 text-start">Notre Engagement</h2>
        <p className="mb-8 text-lg">Chez Éminence, nous nous engageons à créer des bijoux responsables. Nous utilisons des matériaux éthiques et soutenons des pratiques durables pour préserver la beauté de notre planète.</p>
        <button className="block  px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 transition duration-500">Découvrez notre charte éthique</button>
    </section>
);