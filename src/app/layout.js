import "./globals.css";

export const metadata = {
  title: "My Digital Garden",
  description: "A fast and modern personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
