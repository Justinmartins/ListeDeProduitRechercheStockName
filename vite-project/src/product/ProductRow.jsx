export function ProductRow({name, price, isStocked}) {
    return<>
    <tr key={name}>
        <th scope="row">{name}</th>
        <td>{price}</td>
    </tr>
    </>
        
}