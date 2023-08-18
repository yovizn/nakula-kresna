import "@style/globals.css";
import Header from "@components/header"

export const metadata = {
  title: "Nakula Kresna",
  description: "Created by Nakula Kresna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-background font-clashDisplay text-text">
        <main className="h-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
