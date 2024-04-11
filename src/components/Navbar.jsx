import logo from "../assets/icons/spot-logo.svg";
import search_icon from "../assets/icons/search-icon.svg";
import menu_icon from "../assets/icons/menu-icon.svg";

export const Navbar = () => {
  return (
    <header className="navbar-wrapper | ">
      <div className="navbar-container | default-container">
        <div className="navbar-inner | flex justify-between items-center py-[0.725em]">
          <a className="logo | " href="/">
            <img src={logo} alt="logo-icon" />
          </a>
          <nav className="main-navigation | flex items-center">
            <div className="desktop-nav | hidden">
              <ul className="main nav-links | ">
                <li className="nav-item | ">
                  <a className="nav-link | " href="#">
                    СПОТ Карта
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="nav-link | " href="#">
                    Проекты
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="nav-link | " href="#">
                    SPOT Premium
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="nav-link | " href="#">
                    О Нас
                  </a>
                </li>
              </ul>
              <ul className="sub categories-links | ">
                <li className="nav-item | ">
                  <a className="category-link | " href="#">
                    КУЛЬТУРА
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="category-link | " href="#">
                    СПОРТ
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="category-link | " href="#">
                    ФИЛЬМЫ
                  </a>
                </li>
                <li className="nav-item | ">
                  <a className="category-link | " href="#">
                    КНИГИ
                  </a>
                </li>
              </ul>
            </div>
            <ul className="nav-utilities | flex gap-[0.25em]">
              <li className="nav-item | ">
                <div className="image-container | bg-complimentary p-[1rem] rounded-full">
                  <img src={search_icon} alt="search-icon" />
                </div>
              </li>
              <li className="nav-item | ">
                <div className="image-container | bg-complimentary p-[1rem] rounded-full">
                  <img src={menu_icon} alt="menu-icon" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
