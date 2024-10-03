export function ProductRow({name, price, isStocked}) {
    return<>
    <tr key={name}>
        <th scope="row" style={{color : isStocked ? '': 'red'}}>{name}</th>
        <td>{price}</td>
    </tr>
    </>
        
}