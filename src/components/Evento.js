import Button from "./evento/Button";

function Evento({numero}){

    function meuEvento(){
        alert('Ativando primeiro evento');
    }

    function outroEvento(){
        alert('Ativando segundo evento');
    }

    return (
        <div>
            <p>
                Clique para disparar um Evento
            </p>
            <Button event={meuEvento} text="Primeiro evento"></Button>
            <Button event={outroEvento} text="Segundo evento"></Button>
            
        </div>
    )
}
 
export default Evento;