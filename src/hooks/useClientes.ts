import { useEffect, useState } from "react"
import Cliente from "../core/client/Cliente"
import ClienteRepositorio from "../core/client/clienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const { 
        tabelaVisivel,
        exibirFormulario, 
        exibirTabela
    } = useTabelaOuForm()

  useEffect(obterTodos, [])
  
  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })

  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    exibirFormulario()
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  }
  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return{
    tabelaVisivel,  
    exibirTabela,
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos
  }
  
}