const Projeto = ({imagem,titulo,descricao,link}) => {
    return (
        <article className="projeto col-6 col-m-6 col-sd-12">
            <img width="300" src={imagem} alt={titulo} />
            <br /><br />
            <h4>{titulo}</h4>
            <br />
            <p>{descricao}</p>
            <br />
            <a target="_blank" href={link}>Abrir Projeto ❯</a>
        </article>
    )
}

export default Projeto;