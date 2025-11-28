const ItemFormacao = ({ local, curso, data1, data2 }) => {
    return (
        <li className="formacao__item">
            <p>{ local }</p>
            <h6>{ curso }</h6>
            <p>{ data1 } - { data2 }</p>
        </li>
    )
}

export default ItemFormacao;