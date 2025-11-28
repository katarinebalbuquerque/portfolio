import Link from "next/link";

const ItemProjeto = ({ src, titulo, descricao, link }) => {
    return (
        <li className="projeto__item row">
            <section>
                <img width="100" src={ src } alt={ titulo }/>
            </section>
            <section>
                <h6>{ titulo }</h6>
                <p>{ descricao }</p>
                <Link target="_blank" href={ link }>Saiba Mais &#10095;</Link>
            </section>
        </li>
    )
}

export default ItemProjeto;