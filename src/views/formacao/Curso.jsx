const Curso = ({local,curso,graduacao,ano}) => {
    return (
        <article className="curso col-6 col-m-6 col-sd-12">
            <h6>{local}</h6>
            <br />
            <h4>{curso}</h4>
            <br /><hr /><br />
            <h5>{graduacao}</h5>
            <br />
            <h6>Concluído em {ano}</h6>
        </article>
    )
}

export default Curso;