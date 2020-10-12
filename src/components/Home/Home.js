import React from "react";
import Todo from "../Todo/Todo";

import "./styles.css";

const Home = () => (
  <div>
    <div className="container-list">
      <Todo title="Ir ao médico" content="Fazer examesFazer exames" dateInit="07/09/2020"/>
      <Todo title="Fazer compras" content="comprar leite e pão" dateInit="07/09/2020"/>
      <Todo title="Estudar" content="Estudar o projeto de AA" dateInit="07/09/2020"/>
      <Todo title="Todo 3" content="content todo 3" dateInit="07/09/2020"/>
      <Todo title="Todo 4" content="content todo 4" dateInit="07/09/2020"/>
      <Todo title="Todo 5" content="content todo 5" dateInit="07/09/2020" />
    </div>
  </div>
);
export default Home;
