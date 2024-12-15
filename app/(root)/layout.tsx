// Composant principal qui structure la mise en page globale
export default function RootLayout({
  children, // Contenu de chaque page enfant
}: Readonly<{
  children: React.ReactNode; // Définition du type des enfants (contenu React)
}>) {
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  );
}
