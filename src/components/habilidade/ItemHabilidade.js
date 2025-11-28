const ItemHabilidade = ({ titulo, children }) => {
    return (
        <article className="habilidade__item">
            <h6>{ titulo }</h6>
            <ul style={{listStyle:"url('./images/correct3.png')"}}>
                { children }
            </ul>
        </article>
    )
}

export default ItemHabilidade;