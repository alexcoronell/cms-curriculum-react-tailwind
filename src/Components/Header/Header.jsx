import { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = (value) => setShowMenu(value)

  return (
    <header className="Header">
      <button className="Header__btn-menu" onClick={() => onShowMenu(true)}>
        <MdMenu />
      </button>
      <nav className={showMenu ? 'Header__nav showMenu' : 'Header__nav'} id="menu">
        <div className="Header__nav__close-btn-area">
          <button className="Header__nav__close-btn-area__btn-close" onClick={() => onShowMenu(false)}>
            <AiOutlineClose />
          </button>
        </div>
        {/* Menu */}
        <ul className="Header__nav__ul">
          <li>
            <Link onClick={() => onShowMenu(false)} href="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/experiences">Experiences</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/studies">Studies</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/training">Training</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/briefcase">Briefcase</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/contact">Contact</Link>
          </li>
          <li>
            <Link onClick={() => onShowMenu(false)} href="/login">Login</Link>
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
