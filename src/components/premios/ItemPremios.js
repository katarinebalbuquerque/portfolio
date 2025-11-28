const ItemPremios = ({ titulo, local, descricao }) => {
    return (
        <li>
            <h6>{ titulo }</h6>
            <br/>
            <p>{ local }</p>
            <p>{ descricao }</p>
        </li>
    )
}

export default ItemPremios;