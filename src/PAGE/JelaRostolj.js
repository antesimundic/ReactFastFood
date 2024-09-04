import { Footer } from "../COMP/Footer";
import { Header } from "../COMP/Header";

export function JelaRostilj({ food }) {
  console.log(food);
  return (
    <div className="home">
      <Header></Header>
      <div className="onlyHamb">
        <h1>Popis Jela sa Rostilja</h1>
        <GetBurger food={food} />
      </div>
      <Footer></Footer>
    </div>
  );

  function GetBurger({ food }) {
    return (
      <ul>
        {food.map((i) => (
          <GetItem burger={i} key={i} />
        ))}
      </ul>
    );
  }

  function GetItem({ burger }) {
    {
      if (burger.naziv === "rostilj") {
        return (
          <div>
            <h2>Naziv: {burger.naziv}</h2>
            <img src="/steak.jpeg" alt="slikasd" />
            <h4>Cijena:{burger.cijena}&</h4>
          </div>
        );
      }
    }
  }
}
