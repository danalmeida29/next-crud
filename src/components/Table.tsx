import Cliente from "../core/client/Cliente"

interface TableCliProps{
    clientes: Cliente[]
}

export default function Table(props: TableCliProps){

    function renderizarCabecalho(){
        return(
            <tr>
                <th>Código </th>
                <th>Nome </th>
                <th>Idade </th>
                <th>E-mail</th>
            </tr>   
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                    <td>{cliente.email}</td>
                </tr>
            )
        })
    }

    return(
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )


}