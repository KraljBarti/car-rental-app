import Link from "next/link";

export default function SupportPage() {
  return (
    <div>
      <h1>Support Center</h1>
      <ul>
        <li>
          <Link href="/support/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/support/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
