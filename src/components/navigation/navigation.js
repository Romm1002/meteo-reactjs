import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">{/* <img src={logo} width="200px" alt="" /> */}</Link>
      </div>
    </nav>
  );
};

export default Navigation;
