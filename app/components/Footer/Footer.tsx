import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Éminence. Tous droits réservés.</p>
                <p>Développé par <Link className="underline" href="https://www.linkedin.com/in/alexandre-hernandez-392603309/">Alexandre Hernandez</Link></p>
            </div>
        </footer>
    )
}