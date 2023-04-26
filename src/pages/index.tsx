import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/client/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Anna', 34, 'anna@gmail.com', '', '1'), 
    new Cliente('Maria', 26, 'maria@gmail.com', '', '2'),
    new Cliente('Carlos', 53, 'carlos@gmail.com', '', '3'),
    new Cliente('Roberto', 19, 'beto@gmail.com', '', '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.id)
  }

  return (
        <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-purple-500 via-violet-700 to-blue-600
          text-white
        `}>
          <Layout title="Cadastro Simples">
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4">Novo Cliente</Botao>
            </div>
            <Table clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
            />
          </Layout>
        </div>
  )
}
