export default function BookingForm({ formData, onInputChange, onSubmit }) {
  const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={(e) => onInputChange("date", e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={(e) => onInputChange("time", e.target.value)}
      >
        {timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        onChange={(e) => onInputChange("guests", e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) => onInputChange("occasion", e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
