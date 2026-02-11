import Link from "next/link";

async function getCars() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div>
      <h1>Available Cars</h1>
      <ul>
        {cars.slice(0, 10).map((car: any) => (
          <li key={car.id}>
            <Link href={`/cars/${car.id}`}>{car.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
