import { useState } from "react"
import AddCategory from "./components/AddCategory";


export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
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
