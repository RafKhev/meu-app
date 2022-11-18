function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p>{item} {index}</p>)
      ) : (
        <p>A lista está vazia</p>
      )}
    </>
  );
}

export default OutraLista;
