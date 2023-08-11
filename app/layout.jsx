import "@styles/globals.css";

import { Footer, Header } from "@components";

export const metadata = {
  title: "Nakula Kresna",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="bg-dark">
      <main className="h-full">
        <Header />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
