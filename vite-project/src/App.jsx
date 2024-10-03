import { useState } from "react"
import { ProductCategory } from "./product/ProductCategory"
import { ProductRow } from "./product/ProductRow"
import { CheckBox } from "./forms/CheckBox"
import { Input } from "./forms/Input"



const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]


function App() {
  const [isChecked, setIsChecked] = useState(false)
  function toogleChecked() {
    setIsChecked(!isChecked)
  }

  const [rechercheTexte, setRechercheTexte] = useState("")
  const handleChange = e => {
    setRechercheTexte(e.target.value)
  }
    return <>
    <h1>TP React : Liste de produit</h1>
    <SearchBar checked={isChecked} onChange={toogleChecked} rechercheTexte={rechercheTexte} handleChange={handleChange}></SearchBar>
    <ProductTable productsList={PRODUCTS} checked={isChecked} rechercheTexte={rechercheTexte}></ProductTable>
    </>
    
    
}

function SearchBar({checked, onChange, rechercheTexte, handleChange}) {

  return <>
  <Input placeHolder={"Entrer un Produit"} value={rechercheTexte} onChange={handleChange}></Input>
  <p>{rechercheTexte}</p>
    <CheckBox checked={checked} onChange={onChange} label={"Afficher les produits en stock"}></CheckBox>
  </>
}

function ProductTable({productsList,checked, rechercheTexte}) {
  const products = []
  if(checked) {
    productsList = productsList.filter((product) => product.stocked == true)
  }

  if(rechercheTexte.length > 0) {
    productsList = productsList.filter((product) => product.name == rechercheTexte)
  }
  
  
  let lastCategories = null
  for(let product of productsList ) {
    if(product.category != lastCategories) {
      lastCategories = product.category
      products.push(<ProductCategory key={product.category} name={product.category}></ProductCategory>)
    }
    products.push(<ProductRow name={product.name} price={product.price} isStocked={product.stocked}></ProductRow>)
  }

  return <>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    {products}
    </tbody>
  </>
}




export default App
