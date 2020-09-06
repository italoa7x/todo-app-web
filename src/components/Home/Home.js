import React from "react";
import ListCard from "../ListCard/ListCard";
import Menu from "../Menu/Menu";

import "./styles.css";

const Home = () => (
  <div>
    <Menu />
    <div className="container-list">
      <ListCard title="Ir ao médico" content="Fazer exames" />
      <ListCard title="Fazer compras" content="comprar leite e pão" />
      <ListCard title="Estudar" content="Estudar o projeto de AA" />
      <ListCard title="Todo 3" content="content todo 3" />
      <ListCard title="Todo 4" content="content todo 4" />
      <ListCard title="Todo 5" content="content todo 5" />
    </div>
  </div>
);
export default Home;
