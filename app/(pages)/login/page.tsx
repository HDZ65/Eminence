'use client';

// Titre principal : Page de connexion
// Ce fichier contient le composant de la page de connexion avec options Google et email/mot de passe

import React from 'react';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';

type Inputs = {
    email: string;
    password: string;
};

const LoginPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    // Fonction de gestion de la soumission du formulaire
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        // Implémentez ici la logique de connexion avec email/mot de passe
    };

    // Fonction de gestion de la connexion avec Google
    const handleGoogleSignIn = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <section className="absolute inset-0 flex flex-col items-center justify-center gap-6 w-4/5 max-w-md m-auto border border-gray-300 p-6 h-fit">
            <h1 className="text-2xl md:text-3xl text-start w-full">
                Connexion à votre compte
            </h1>
            <form
                className="flex flex-col gap-6 w-full"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Adresse e-mail</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email requis' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="email@exemple.com"
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Mot de passe</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'Mot de passe requis' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="••••••••"
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p role="alert" className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none  outline-none transition-colors duration-500"
                >
                    Se connecter
                </button>
            </form>

            <div className="relative w-full text-center my-2">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative">
                    <span className="px-2 bg-[#FFFAF2] text-sm text-gray-500">Ou continuez avec</span>
                </div>
            </div>

            <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-500"
            >
                <Image className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Logo Google" width={20} height={20} />
                Se connecter avec Google
            </button>
        </section>
    );
};

export default LoginPage;