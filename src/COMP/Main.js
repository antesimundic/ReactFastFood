export function Main({ food }) {
  return (
    <div className="main">
      <Lside />
      <Food food={food}></Food>
      <Rside />
    </div>
  );
}

function Lside() {
  return <div className="lside"></div>;
}

function Rside() {
  return <div className="rside"></div>;
}

function Food({ food }) {
  return (
    <ul className="listOfFood">
      {food.map((i) => (
        <FoodItem foodsItem={i} key={i.id} />
      ))}
    </ul>
  );
}

function FoodItem({ foodsItem }) {
  return (
    <li className="itemFood">
      <h2>Opis: {foodsItem.naziv}</h2>
      <img src="hamburger.png" alt="slika1" />
      <h4>Cijena:{foodsItem.cijena}</h4>
      <button className="butt">Kupi</button>
    </li>
  );
}
