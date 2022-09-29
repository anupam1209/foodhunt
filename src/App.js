import React, { useState } from "react";
import "./styles.css";
const restaurantCat = ["BBQ", "Bakery", "Indian", "Chinese"];
const restaurantDict = {
  cat1: {
    Kebapci: ["North Indian", "Briyani", "Mughlai"],
    Zaatar: [
      "Alfaham Dajaj",
      "Chicken Zaatar Special Biryani",
      "Butter Chicken Masala"
    ]
  },
  cat2: {
    Theobroma: ["Eggless Opium Cake", "Dutch Truffle Cake"],
    ITC_bakery: ["Tiramisu Jar", "Lotus Biscoff Brownie"]
  },
  cat3: {
    Rahhams: ["kerala parotha", "chicken briyani"],
    DFC_Cuisine: [
      "Chicken Biryani +chicken Kabab 6 Pieces +pepsi",
      "Chicken Shawarma Roll"
    ]
  },
  cat4: {
    Schezuan_Dragon: ["Mixed Noodles", "Veg. Lee Fu Fried Rice"],
    LEECHAN: ["Gobi Manchurian", "Veg. Chilli Garlic Fried Rice"],
    Yo_Chow: ["Chicken Szechuan Noodles", "Lee Fu Mushrooms"]
  }
};

export default function App() {
  const [category, categoryUpdater] = useState("cat1");

  function returnListItem(cat, index) {
    const list = restaurantDict[category];
    const reqItem = list[cat].filter((e, i) => {
      return i === index;
    });
    if (reqItem) return reqItem;
    else return -111;
  }
  function displayrestaurantCat(cat) {
    cat++;
    const cate = `cat` + cat;

    categoryUpdater(cate);
  }

  return (
    <div className="App">
      <img
        src="https://www.freepnglogos.com/uploads/food-png/true-food-kitchen-35.png"
        alt="icon"
        className="restaurant-img"
        style={{ width: "5rem" }}
      />
      <div className="container">
        <h1>
          Food <span style={{ color: "#fa5252" }}> Hunt</span>
        </h1>
        <h2>Check most cpabale restaurants in each category</h2>

        {restaurantCat.map((cat, i) => (
          <button
            id={cat}
            style={{
              padding: "1rem",
              margin: "0.4rem",
              borderRadius: "0.5rem",
              border: "none",
              fontSize: "1.2rem"
            }}
            key={cat}
            onClick={() => displayrestaurantCat(i)}
          >
            {cat}
          </button>
        ))}
        <hr style={{ marginLeft: "auto" }} className="horizontal-line" />
        {/* list */}
        {Object.keys(restaurantDict[category]).map(function (cat) {
          const array = new Array(restaurantDict[category][cat].length).fill(0);
          return (
            <ul
              style={{ listStyle: "none" }}
              key={cat}
              className="restaurant-list"
            >
              <h3 className="restaurant-name"> {cat} </h3>

              {array.map((_, i) => {
                const retunItem = returnListItem(cat, i);
                if (retunItem !== -111) {
                  return (
                    <li className="restaurant-prop" key={i}>
                      {retunItem}
                    </li>
                  );
                }
              })}
              <hr style={{ marginLeft: "auto" }} className="horizontal-line" />
            </ul>
          );
        })}
        {/* list--end */}
      </div>
    </div>
  );
}
