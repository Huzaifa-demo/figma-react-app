import React from "react";
import boxthree from "./images/box-3.png";
import boxfour from "./images/box-4.png";
import boxfive from "./images/box-5.png";

import Card from "./Card";

const FeaturedSec = () => {
  return (
    <div>
      <div className="featured">
        <h2>Featured Events On Sale Today</h2>

        <div className="filter">
          <h4>Filter By : </h4>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Sports</button>
            </li>
            <li>
              <button>Concerts</button>
            </li>
            <li>
              <button>Festivals</button>
            </li>
            <li>
              <button>Theaters</button>
            </li>
          </ul>

          <select name="events" className="dropdown">
            <option>All Events</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="cards">
          <Card cardimg={boxthree} />
          <Card cardimg={boxfour} />
          <Card cardimg={boxfive} />

          <Card cardimg={boxthree} />
          <Card cardimg={boxfour} />
          <Card cardimg={boxfive} />

          <Card cardimg={boxthree} />
          <Card cardimg={boxfour} />
          <Card cardimg={boxfive} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSec;
