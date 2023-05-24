import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="error">
      <h2>Erreur 404</h2>
      <p>Cette page n'existe pas ou n'existe plus</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default NoMatch;
