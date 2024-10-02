import { useState } from "react"



const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]


function App() {
    
    return <>
    <h1>TP React : Liste de produit</h1>
    <SearchBar></SearchBar>
    </>
    
    
}

function SearchBar() {
  return <>
  <Input></Input>
  <CheckBox></CheckBox>
  <ProductTable></ProductTable>
  </>
}

function Input() {
  return <input type="text"></input>
}

function CheckBox() {
  const [checked, setChecked] = useState(false) 
    const toggleCheckBox= () => {
      setChecked(!checked)
    }
  return <>
  <input type="checkbox"  checked ={checked} onChange={toggleCheckBox}></input>
  Only show product in stock
  <p>{checked.toString()}</p>
  </>

}

function ProductTable() {
  return <>
      <table>
        <ProductCategoryRow></ProductCategoryRow>
        <ProductRow></ProductRow>
      </table>
    
  </>
}

function ProductCategoryRow() {
  return <>
    <thead>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </thead>
  </>
}

function ProductRow({checked}) {
    const productInStock = PRODUCTS.filter(product => {
      product.stocked
    }
      )
    if({checked}) {
      return <p>Hello</p>
    } else {
      return <>
      {PRODUCTS.map(product => (
        <tr key={product.name}>
        <th scope="row">{product.name}</th>
        <td>{product.price}</td>
      </tr>
      ))}
    </>
    }
    
}


export default App
