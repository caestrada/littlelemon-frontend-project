import { useState } from "react";

import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <h1>Reservations</h1>
      <BookingForm formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} />
    </>
  );
}
