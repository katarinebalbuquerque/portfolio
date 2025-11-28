import Link from "next/link";

const ItemContato = ({ target, href, nome, src, titulo }) => {
    return (
        <li className="contato__item row">
            <img width="22" src={ src } alt={ titulo }/>
             { "" }
            <Link target={ target } href={ href }>{ nome }</Link>            
        </li>
    )
}

export default ItemContato;