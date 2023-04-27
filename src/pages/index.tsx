import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/client/Cliente";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const clientes = [
    new Cliente('Anna', 34, 'anna@gmail.com', '', '1'), 
    new Cliente('Maria', 26, 'maria@gmail.com', '', '2'),
    new Cliente('Carlos', 53, 'carlos@gmail.com', '', '3'),
    new Cliente('Roberto', 19, 'beto@gmail.com', '', '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.id)
  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  
  return (
        <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-purple-500 via-violet-700 to-blue-600
          text-white
        `}>
          <Layout title="Cadastro Simples">
            {visivel === 'tabela' ? (
              <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4 bg-gradient-to-r from-green-500 to-green-700" 
                onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Table clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido} />
              </>
            ): (
              <Formulario 
                cliente={cliente}
                cancelado={() => setVisivel('tabela')}
                clienteMudou={salvarCliente}
              />
            )}
          </Layout>
        </div>
  )
}
