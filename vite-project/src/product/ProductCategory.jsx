export function ProductCategory({name}) {
    return <>
      <tr key={name}>
      <th scope="row" style={{fontSize : "40px"}}>{name}</th>
      </tr>
    </>
}