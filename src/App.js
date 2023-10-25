import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const cards = [
  {
    id: 1,
    image: '/images/greek-salad.jpg',
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy letture, peppers, olives and our Chicago style feta cheese. Garnished with crunchy garlic and rosemary crutons.',
  },
  {
    id: 2,
    image: '/images/bruchetta.jpeg',
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    image: '/images/lemon-dessert.jpg',
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma\'s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]

function App() {
  return (
    <>
      <Header />
      <main>
        <section className='hero'>
          <div className="content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>

          <img src="/images/restauranfood.jpg" alt="logo" className="hero-image" />
        </section>

        <section className="specials">
          <div className='specials-header'>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
          </div>

          <div className='specials-cards'>
            {cards.map((card) => (
              <Card data={card} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
