import Navigation from "../navigation/navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>Météo créée en ReactJS par Romain et Damien</footer>
    </>
  );
};

export default Layout;
