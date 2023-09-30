import { Link } from "wouter";

/* Styles */
import './styles.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/studies">Studies</Link>
        <Link href="/training">Training</Link>
        <Link href="/briefcase">Briefcase</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
