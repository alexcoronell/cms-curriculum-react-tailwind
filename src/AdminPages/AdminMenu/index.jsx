import { Link } from "wouter";

/* Components */
import BasicPage from "../../Components/BasicPage";

/* Data */
import AdminMenuItems from "../../core/AdminMenuItems";

/* Styles */
import './style.scss';

const AdminMenu = () => {
  const titlePage = "";

  return (
    <BasicPage titlePage={titlePage}>
      <main className="AdminMenu content">
        <nav className="AdminMenu__nav">
          <u className="AdminMenu__nav__ul">
            {AdminMenuItems.map((item, index) => {
              return(
              <li key={index} className="AdminMenu__nav__ul__li">
                <Link to={item.url}>
                  <button className="AdminMenu__nav__ul__li__button">{item.name}</button>
                </Link>
              </li>)
            })}
          </u>
        </nav>
      </main>
    </BasicPage>
  );
};

export default AdminMenu;
