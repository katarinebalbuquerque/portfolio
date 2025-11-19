const Experiencia = ({data,cargo,empresa,children}) => {
    return(
        <article className="experiencia col-6 col-m-6 col-sd-12">
            <h6>{data}</h6>
            <br />
            <h4>{cargo}</h4>
            <br />
            <h5>{empresa}</h5>
            <br />
            <hr /><br />
            <section className="itens row">
                {children}
            </section>
        </article>
    )
}

export default Experiencia;