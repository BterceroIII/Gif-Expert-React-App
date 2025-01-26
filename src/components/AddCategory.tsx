import { useState } from 'react';


export default function AddCategory() {
  
    const [inputValue, setInputValue] = useState('One Punch');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
    <>
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </form>
    </>
  )
}
