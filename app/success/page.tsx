import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="p-8 text-center space-y-4">
      <h1 className="text-2xl font-bold text-green-600">Success!</h1>
      <p className="text-gray-600 mt-2">
        Our team will contact you soon to confirm your booking. Thank you for choosing our service!
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
};
