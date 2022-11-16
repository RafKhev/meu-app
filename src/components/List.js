import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Volvo" ano_lancamento={1999}/>
                <Item marca="Mitsubishi" ano_lancamento={1964}/>
                <Item marca="Renault"/>
                <Item ano_lancamento={2002}/>
            </ul>
        </>
    )
}


export default List