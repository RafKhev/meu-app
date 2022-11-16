import Frase from "./Frase";

function Componente(){
    return(
        <div className="quadrado">
            <ul>
                <Frase></Frase>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}

export default Componente;