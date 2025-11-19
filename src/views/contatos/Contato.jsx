const Contato = ({nome, link, rede, target}) => {
    return (
        <article className="contato col-4 col-m-6 col-sd-12">
            <h5>{rede}:<br/><a target={target} href={link}>{nome}</a></h5>
        </article>
    )
}

export default Contato;