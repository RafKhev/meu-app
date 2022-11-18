import "./App.css";
import "./components/Componente.js";
//import Componente from "./components/Componente.js";
//import Frase from "./components/Frase.js";
//import Propis from "./components/props";
//import Pessoa from "./components/Pessoa";
//import List from "./components/List";
//import Evento from "./components/Evento";
//mport Form from "./components/Form";
import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import SeuNome from "./components/SeuNome";
import { useState } from "react";
function App() {
  //as variaveis vao aqui
  //const name = "Clebson";
  //o debaix oe o retorno

  // function soma(a, b) {
  //   return a + b;
  // }

  //const url = "https://picsum.photos/150";
  const meusItens = [
    "React",
    "Vue",
    "Angular",
    "Abacaxi"
  ];

  const [nome,setNome] = useState()
  return (
    <div className="App">
      <div>
        {/* <Propis nome="Jose"></Propis>
      <Propis nome="Marcella"></Propis>
      <h1>Olá {name}</h1>
      <Componente></Componente>
      <Frase></Frase>
      <p>Quik Maffs = {soma(5, 6)} Função no JSX</p>
      <img src={url} alt="" /> <br /> Imagens no react (através de variáveis)
      <Pessoa
        nome="Carlos"
        foto={url}
        profissao="Professor"
        idade="32"
      ></Pessoa>
      <br></br>
      <Pessoa
        nome="Marina"
        foto={url}
        profissao="Cozinheira"
        idade="44"
      ></Pessoa>
      <List></List>
      <Form/>
      <Evento numero="1" />
      <h1>Renderização condicional</h1>
      <Condicional/>
      <h1>Renderização de lista</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    */}
      </div>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
    </div>
  );
}

export default App;
