import "./globals.css";

export const metadata = {
  title: "Home",
  description: "This is a home page of HR Sohel's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
