import Link from "next/link";

export default function AccountPage() {
  return (
    <div>
      <h1>My Account</h1>
      <ul>
        <li>
          <Link href="/account/bookings">My Bookings</Link>
        </li>
      </ul>
    </div>
  );
}
