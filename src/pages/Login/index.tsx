import { useState,KeyboardEvent, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const navigate = useNavigate();
    const auth  = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassworld] = useState('');

    const handleLogin =async () => {
        if(email && password){
            
            const isLogged = await auth.signin(email,password);
            console.log(isLogged);
            if(isLogged){
                navigate('/');
                
            }else{
                alert("Não deu certo");
            }
        }
    }

    return (
        <div>
            <h2>Pagina Fechada</h2>
            <input
                type="text"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={e => setPassworld(e.target.value)}

            />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}