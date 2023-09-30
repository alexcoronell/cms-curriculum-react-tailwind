import { Link } from "wouter";

import { MdMenu } from "react-icons/md";
import {
  AiOutlineClose,
  AiOutlineGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

/* Styles */
import "./styles.scss";

const Header = () => {
  return (
    <header className="Header">
      <button className="Header__btn-menu">
        <MdMenu />
      </button>
      <nav className="Header__nav">
        <div className="Header__nav__close-btn-area">
          <button className="Header__nav__close-btn-area__btn-close">
            <AiOutlineClose />
          </button>
        </div>
        {/* Menu */}
        <ul className="Header__nav__ul">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/experiences">Experiences</Link>
          </li>
          <li>
            <Link href="/studies">Studies</Link>
          </li>
          <li>
            <Link href="/training">Training</Link>
          </li>
          <li>
            <Link href="/briefcase">Briefcase</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>

        <div className="Header__nav__contact">
          <a href="#" target="__blank" className="text-github"><AiOutlineGithub /></a>
          <a href="#" target="__blank" className="text-gitlab"><AiFillGitlab /></a>
          <a href="#" target="__blank" className="text-linkedin"><AiFillLinkedin /></a>
          <a href="#" target="__blank" className="text-white"><AiOutlineMail /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
