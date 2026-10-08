import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">About Motor Rent Bali</h1>
      <p>Armada motor rent in Bali you can trust for your transportation needs.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        &laquo; Back to Home
      </Link>
    </div>
  )
};
