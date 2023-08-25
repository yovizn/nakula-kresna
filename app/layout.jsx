import "@style/globals.css";
import Header from "@components/header"
import Footer from "@components/Footer";


export const metadata = {
  title: "Nakula Kresna",
  description: "Created by Nakula Kresna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-background font-baiJamjuree text-text">
        <main className="h-full overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
