import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/client/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, 'ana@gmail.com', '', '1'),
    new Cliente('Maria', 26, 'maria@gmail.com', '', '2'),
    new Cliente('Carlos', 53, 'carlos@gmail.com', '', '3'),
    new Cliente('Roberto', 19, 'beto@gmail.com', '', '4'),
  ]

  return (
        <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-purple-500 via-violet-700 to-blue-600
          text-white
        `}>
          <Layout title="Cadastro Simples">
            <Table clientes={clientes}></Table>
          </Layout>
        </div>
  )
}
