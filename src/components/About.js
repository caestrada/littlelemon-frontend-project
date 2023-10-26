export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, praesentium omnis atque
          maxime totam officiis at, reiciendis nisi tempore illo voluptatibus ipsum culpa
          consequuntur, dolorem earum cupiditate pariatur officia quasi.
        </p>
      </div>

      <div className="about-image-container">
        <img src="/images/restauranfood.jpg" alt="logo" className="about-image" />
        <img src="/images/restauranfood.jpg" alt="logo" className="about-image-overlap" />
      </div>
    </section>
  );
}
