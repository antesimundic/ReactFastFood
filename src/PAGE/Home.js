import { Header } from "../COMP/Header";
import { Footer } from "../COMP/Footer";
import { Main } from "../COMP/Main";
export function Home({ food }) {
  return (
    <div className="home">
      <Header></Header>
      <Main food={food}></Main>
      <Footer></Footer>
    </div>
  );
}
