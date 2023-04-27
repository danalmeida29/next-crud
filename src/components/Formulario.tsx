import { useState } from "react";
import Cliente from "../core/client/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void

}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    const [email, setEmail] = useState(props.cliente?.email ?? '')
    const [password, setPassword] = useState(props.cliente?.password ?? '')

    return(
        <div className="bg-gray-200 p-5 rounded-xl">
            {id ? (
                <Entrada 
                 somenteLeitura
                 text="Código" 
                 valor={id}
                 className="mb-4"
                />
            ) : false}
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
                className="mb-4"
            />
            <Entrada 
                text="E-mail" 
                tipo="e-mail" 
                className="mb-4"
                valor={email}
                valorMudou={setEmail}
            />

            <Entrada 
                text="Senha" 
                valor={password}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, email, password, id)) }
                    className="mr-2 bg-gradient-to-r from-blue-500 to-blue-700">
                    {id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao
                    onClick={props.cancelado} 
                    className="bg-gradient-to-r from-gray-500 to-gray-700"  
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}