import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import SearchForm from "../searchForm";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navigation;
