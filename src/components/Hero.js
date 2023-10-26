import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with
          a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>

      <div className="hero-image-container">
        <img src="/images/restauranfood.jpg" alt="logo" className="hero-image" />
      </div>
    </section>
  );
}
