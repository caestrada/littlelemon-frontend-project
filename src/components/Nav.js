import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <img src="/logo.svg" alt="logo" />
      <ul>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/reservation" className="nav-item">
          Reservations
        </Link>
        <Link to="/order-online" className="nav-item">
          Order Online
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </ul>
    </nav>
  );
}
