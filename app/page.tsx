import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Car Rental App</h1>
      <p>
        Welcome to our car rental service. Find the perfect vehicle for your
        trip.
      </p>

      <h2>Quick Navigation</h2>
      <ul>
        <li>
          <Link href="/search">Search Cars</Link>
        </li>
        <li>
          <Link href="/locations">Our Locations</Link>
        </li>
        <li>
          <Link href="/promotions">Promotions</Link>
        </li>
      </ul>
    </div>
  );
}
