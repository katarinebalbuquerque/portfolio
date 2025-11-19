const Habilidade = ({titulo, children}) => {
    return (
        <article className="habilidade col-6 col-m-6 col-sd-12">
            <h4>{titulo}</h4>
            <hr /><br />
            <section className="itens row">
                {children}
            </section>
        </article>
    )
}

export default Habilidade;