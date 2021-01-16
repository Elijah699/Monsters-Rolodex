import React from "react";

import { Card } from "../Card/card.components";

import "./card-list.css";

export const CardList = (props) => {
  return (
    <div className="cardlist">
      {" "}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}{" "}
    </div>
  );
};
