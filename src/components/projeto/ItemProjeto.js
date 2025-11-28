const ItemProjeto = ({ src, titulo, descricao, link }) => {
    return (
        <li className="projeto__item row">
            <section>
                <img width="100" src={ src } alt={ titulo }/>
            </section>
            <section>
                <h6>{ titulo }</h6>
                <p>{ descricao }</p>
                <a target="_blank" href={ link }>Saiba Mais &#10095;</a>
            </section>
        </li>
    )
}

export default ItemProjeto;