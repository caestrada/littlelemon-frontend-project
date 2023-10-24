import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
      </main>
      <Footer />
    </>
  );
}

export default App;
