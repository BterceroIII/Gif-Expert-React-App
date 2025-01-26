import { useState } from 'react';

interface AddCategoryProps {
    onNewCategory: (newCategory: string) => void;
}

export default function AddCategory({ onNewCategory }: AddCategoryProps) {
  
    const [inputValue, setInputValue] = useState('One Punch');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValueTrim);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </form>
  )
}
