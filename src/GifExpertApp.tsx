import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch']);
  
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
        <GifGrid categor={categories} />

    </>

  )
}
