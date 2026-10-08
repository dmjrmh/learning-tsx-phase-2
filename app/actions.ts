'use server';

import { redirect } from "next/navigation";

export async function createBookingAction(formData: FormData) {
  // Take the value form data from the attributes name
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  // Backend Logic to create a booking with the provided name and phone number
  console.log("Creating booking with name:", name, "and phone:", phone);

  // Redirect to the success page after successful booking
  redirect("/success");
}