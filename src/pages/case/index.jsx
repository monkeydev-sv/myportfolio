import React from "react";
import "./case.css";
import annelieng from "../../assets/images/bloggannlie.png";
import bondeform from "../../assets/images/bondeform.png";
import pokemon from "../../assets/images/pokemon.png";

const Case = () => {
  return (
    <>
      <div className="cont">
        <div class="columns is-full">
          <div class="column is-half">
            <img src={annelieng} />
          </div>
          <div class="column is-half">
            <img src={bondeform} />
          </div>
        </div>
        <div class="columns is-full">
          <div class="column is-half">
            <img src={pokemon} />
          </div>
          <div class="column is-half"></div>
        </div>
      </div>
    </>
  );
};

export default Case;
