import { useState } from "react";

function Form() {
  function cadastrar(e) {
    e.preventDefault();
    console.log(`Cadastrou usuário ${name} com a senha ${password}`);
  }

  const [name, setName] = useState(); //nome do campo e o que vai alterar
  const [password, setPassword] = useState(); //permite pegar as coisas

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome"
            value = {name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="digite sua senha"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="enviar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
