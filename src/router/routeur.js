import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import Home from "../pages/home";
import NoMatch from "./noMatch";
import pokemons from "../data/pokemons.json";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home pokemons={pokemons} />}></Route>
          {/* <Route path="/details/:id" element={<Details />}></Route> */}
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;
