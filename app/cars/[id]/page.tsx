interface CarPageProps {
  params: { id: string };
}

async function getCar(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function CarDetailsPage({ params }: CarPageProps) {
  const car = await getCar(params.id);

  return (
    <div>
      <h1>Car Details</h1>
      <h2>{car.title}</h2>
      <p>{car.body}</p>
    </div>
  );
}
