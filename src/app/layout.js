import "./globals.css";

export const metadata = {
  title: "Digital Business Card",
  description: "A fast, mobile-first digital business card.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
