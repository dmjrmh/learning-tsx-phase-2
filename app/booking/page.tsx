import { createBookingAction } from "../actions";

export default function BookingFormPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Form Booking Unit</h1>

      <form action={createBookingAction} className="space-y-4">
        <div className="">
          <label htmlFor="name" className="block text-sm">Full Name</label>
          <input type="text" name="name" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="">
          <label htmlFor="phone" className="block text-sm">Phone Number</label>
          <input type="text" name="phone" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Booking
        </button>
      </form>
    </div>
  )
};
