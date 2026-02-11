import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: "flex", gap: "15px" }}>
          <Link href="/">Home</Link>
          <Link href="/search">Search Cars</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/promotions">Promotions</Link>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/support">Support</Link>
          <Link href="/account">Account</Link>
        </nav>

        <hr />

        {children}
      </body>
    </html>
  );
}
