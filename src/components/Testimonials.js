const data = [
  {
    id: 1,
    image: "/images/greek-salad.jpg",
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy letture, peppers, olives and our Chicago style feta cheese. Garnished with crunchy garlic and rosemary crutons.",
  },
  {
    id: 2,
    image: "/images/bruchetta.jpeg",
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    image: "/images/lemon-dessert.jpg",
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    id: 4,
    image: "/images/lemon-dessert.jpg",
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonial-cards">
        {data.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>Rating</h3>
            <div className="testimonial-image-name">
              <img src={testimonial.image} alt={testimonial.title} />
              <h3>{testimonial.title}</h3>
            </div>
            <p className="card-description">Description</p>
          </div>
        ))}
      </div>
    </section>
  );
}
