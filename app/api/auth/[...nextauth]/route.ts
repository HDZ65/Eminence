// Titre : Configuration de l'authentification NextAuth pour l'API
import { authOptions } from '@/lib/authOptions'
import NextAuth from 'next-auth'

/**
 * Gestionnaire d'authentification NextAuth
 * @description Cette fonction gère les requêtes GET et POST pour l'authentification
 * @accessibility Utilise des méthodes standard d'authentification, compatibles avec les technologies d'assistance
 */
const handler = NextAuth(authOptions)

/**
 * Exportation des gestionnaires GET et POST
 * @description Next.js 13+ requiert l'exportation explicite des méthodes HTTP
 */
export { handler as GET, handler as POST }