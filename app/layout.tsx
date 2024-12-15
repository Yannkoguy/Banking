// Importation des types et fonctions nécessaires
import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
// Configuration de la police Inter avec optimisation
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// Configuration de la police IBM Plex Serif avec des poids spécifiques
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

// Métadonnées pour l'application (titre, description, icône)
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a moder app Banking platform for everyone ",
  icons:{
    icon :'/icons/logo.svg'
  }
  
};
// Composant principal qui structure la mise en page globale
export default function RootLayout({
  children, // Contenu de chaque page enfant
}: Readonly<{
  children: React.ReactNode; // Définition du type des enfants (contenu React)
}>) {
  return (
    <html lang="en">
      {/* Définit la langue de la page */}
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {/* Applique les variables CSS des polices et lissage des polices */}
        {children} {/* Affiche le contenu des pages enfants */}
      </body>
    </html>
  );
}
