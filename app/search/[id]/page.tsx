interface CarDetailsProps {
  params: { id: string };
}

export default function CarDetailsPage({ params }: CarDetailsProps) {
  return (
    <div>
      <h1>Car Details</h1>
      <p>Car ID: {params.id}</p>
      <p>Here you can see pricing, specifications, and booking options.</p>
    </div>
  );
}
