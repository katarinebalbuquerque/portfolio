const ItemCurso = ({ curso, local, horas }) => {
    return (
        <li className="curso__item">
            <h6>{ curso } - { local }</h6>
            <p>{ horas }</p>
        </li>
    )
}

export default ItemCurso;