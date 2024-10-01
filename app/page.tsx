import Image from "next/image";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import image1 from './../public/1.jpg';
import image3 from './../public/3.jpg';
import image4 from './../public/4.jpg';
import image5 from './../public/5.jpg';
import image7 from './../public/7.jpg';
import image8 from './../public/8.jpg';
import image10 from './../public/10.jpg';
import React from 'react';
import Link from "next/link";
import EmblaCarousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

export default function Home() {
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
      <Video />
      <section className="flex flex-col md:flex-row gap-12  lg:gap-16">
          <div className="flex flex-col gap-6 w-full md:w-4/6 ">
            <Image className="w-full h-[20rem] md:h-[25rem] lg:h-[35rem] object-cover" src={image3} alt="Image 3" priority width={1000} height={1000} />
            <p className="text-xs">Boucle d&apos;oreille en or 18 carats</p>
            <h2 className="text-3xl">Affirmez votre réussite</h2>
            <p>Faites de votre succès un événement à part entière avec nos boucles d&apos;oreilles en or 18 carats. Chaque pièce est une affirmation de votre réussite et de votre style.</p>
            <Link className="border-b border-black w-fit" href="/">Voir plus</Link>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-2/6">
            <Image className="w-full h-[20rem] md:h-[25rem] lg:h-[35rem] object-cover" src={image1} alt="Image 3" priority width={1000} height={1000} />
            <p className="text-xs">Broche en or 18 carats. Pierre de lune</p>
            <h2 className="text-3xl">Le détail qui fera votre différence</h2>
            <p>Chaque pièce est une affirmation de votre style. Nos broches seront le détail qui fera la différence.</p>
            <Link className="border-b border-black w-fit" href="/">Voir plus</Link>
          </div>
        </section>

        <section className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <h1 className="text-4xl text-center">Des pièces inspirées </h1>
          <EmblaCarousel slides={slides} />
        </section>

        <section className="flex flex-col items-start justify-start md:flex-row gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col justify-start items-start gap-6 w-1/2">
            <h3 className="text-3xl font-semibold font-valkyrie text-gray-800">La maison</h3>
            <h2 className="text-7xl font-semibold font-valkyrie -mt-6 text-gray-800">Éminence</h2>
          </div>
          <div className="flex flex-col justify-start gap-6 w-full md:w-1/2">
            <p className="text-lg">Bienvenue chez Éminence, la maison de joaillerie où chaque création est une œuvre d&apos;art destinée aux femmes audacieuses et raffinées. <br />
              Nos bijoux, conçus avec des matériaux précieux et des designs exclusifs, incarnent l&apos;élégance et le caractère. Chaque pièce est une déclaration de style, une affirmation de votre personnalité unique, et une invitation à briller avec une sophistication inégalée. <br />
              Découvrez l&apos;essence du luxe avec Éminence, où tradition et innovation se rencontrent pour sublimer votre beauté.</p>
            <Link className="border border-black px-6 py-2 w-full text-center md:w-fit hover:bg-gray-800 hover:text-white transition-colors duration-500 text-lg" href="/la-maison-eminence">Explorer la maison Éminence</Link>
          </div>
        </section>
      </>
  );
}
