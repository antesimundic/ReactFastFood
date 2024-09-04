import { Footer } from "../COMP/Footer";
import { Header } from "../COMP/Header";
import { Main } from "../COMP/Main";

export function Kontakt({ setNavigation }) {
  return (
    <div className="home">
      <Header setNavigation={setNavigation} />
      <div className="main">
        <h1>Kontktiraj nas</h1>
        <h2>000000000000000000000000000000000000000000000000</h2>
      </div>
      <Footer />
    </div>
  );
}
