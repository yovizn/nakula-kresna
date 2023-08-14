import "@style/globals.css";
import Header from "@components/header"

export const metadata = {
  title: "Nakula Kresna",
  description: "Created by Nakula Kresna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-blackGreen font-clashDisplay text-white">
        <main className="h-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
