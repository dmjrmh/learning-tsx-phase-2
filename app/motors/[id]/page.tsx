export default async function MotorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Detail Motor ID: {id}</h1>
      <p className="text-gray-600 mt-2">
        This is the detail page for the motor with ID: {id}. You can add more information about the motor here, such as specifications, features, and images.
      </p>
    </div>
  )
}