import { Link, Outlet } from "react-router";
import styles from "./LayoutMain.module.css"; // Importa los estilos CSS Modules

export const Layout = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div>
            <a href="/" className={styles.logo}>
              Mi App
            </a>
          </div>

          <div className={styles.navLinks}>
            <Link to="task" className={styles.navLink}>
              Tareas
            </Link>
            <Link to="register" className={styles.navLink}>
              Form Register
            </Link>
            <Link to="timer" className={styles.navLink}>
              Timer
            </Link>
          </div>

          <div className={styles.mobileMenuButtonContainer}>
            <button className={styles.mobileMenuButton} aria-label="Abrir menú">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
