const ItemContato = ({ target, href, nome, src, titulo }) => {
    return (
        <li className="contato__item row">
            <img width="22" src={ src } alt={ titulo }/>
             { "" }
            <a target={ target } href={ href }>{ nome }</a>
        </li>
    )
}

export default ItemContato;