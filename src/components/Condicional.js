import {useState} from 'react'

function Condicional(){

    const [email, setMail] = useState()
    const [userEmail, setUserMail] = useState()
    var inputMail = document.getElementById("email");

    function enviarMail(e){
        e.preventDefault()
        console.log('Testando email')
        setUserMail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserMail('')
        inputMail.value = ''
    }

    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" id="email" placeholder="email@provedor.com" onChange={(e) => setMail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarMail}>Enviar email</button>
            {userEmail && ( //se userEmail existe, então execute
                <div>
                    O email do usuário é: {userEmail}
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div> 
            )}
        </div>
    )
}

export default Condicional