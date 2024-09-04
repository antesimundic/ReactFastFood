import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home } from "./PAGE/Home";
import { Kontakt } from "./PAGE/Kontakt";
import { Hamburger } from "./PAGE/Hamburgeri";
import { Pizze } from "./PAGE/Pizze";
import { JelaRostilj } from "./PAGE/JelaRostolj";
function App() {
  const [navigation, setNavigation] = useState("");
  const food = [
    {
      id: 1,
      naziv: "hamburger",

      cijena: 5,
    },
    {
      id: 11,
      naziv: "Pizza",

      cijena: 5,
    },
    {
      id: 312,
      naziv: "Pizza",

      cijena: 5,
    },
    {
      id: 222,
      naziv: "Pizza",

      cijena: 5,
    },
    {
      id: 834,
      naziv: "Pizza",

      cijena: 5,
    },
    {
      id: 35,
      naziv: "hamburger",

      cijena: 52,
    },
    {
      id: 32,
      naziv: "hamburger",

      cijena: 523,
    },

    {
      id: 3,
      naziv: "Salata",

      cijena: 2,
    },
    {
      id: 4,
      naziv: "rostilj",

      cijena: 11,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home food={food}></Home>}></Route>
          <Route
            path="hamburger"
            element={<Hamburger food={food} setNavigation={setNavigation} />}
          ></Route>
          <Route
            path="kontakt"
            element={<Kontakt setNavigation={setNavigation} />}
          ></Route>{" "}
          <Route
            path="pizza"
            element={<Pizze setNavigation={setNavigation} food={food} />}
          ></Route>
          <Route
            path="rostilj"
            element={<JelaRostilj food={food} setNavigation={setNavigation} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
