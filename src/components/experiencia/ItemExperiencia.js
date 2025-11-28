const ItemExperiencia = ({ data, cargo, empresa, descricao }) => {
    return (
        <li className="experiencia__item">            
            <p>{ data }</p>
            <h6>{ cargo } - ({ empresa })</h6>
            <p>{ descricao }</p>            
        </li>
    )
}

export default ItemExperiencia;