import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const{ 
    clienteSelecionado, 
    novoCliente, 
    salvarCliente, 
    clienteExcluido, 
    cliente, 
    clientes,
    tabelaVisivel, 
    exibirTabela
  } = useClientes()

  return (
        <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-purple-500 via-violet-700 to-blue-600
          text-white
        `}>
          <Layout title="Cadastro Simples">
            {tabelaVisivel ? (
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
                cancelado={() => exibirTabela}
                clienteMudou={salvarCliente}
              />
            )}
          </Layout>
        </div>
  )
}
