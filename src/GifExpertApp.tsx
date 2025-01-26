import { useState } from "react"
import AddCategory from "./components/AddCategory";


export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = () => {
    setCategories(prevCategories => [...prevCategories, 'HunterXHunter']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory />
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map(categories => {
              return <li key={categories}>{categories}</li>
            })
          }
        </ol>
    </>

  )
}
