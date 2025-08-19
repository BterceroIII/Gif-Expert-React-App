import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { GifList } from "./gifs/Components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handelTermClicked = async (term: string) => {
    const newGifs = await getGifsByQuery(term);
    setGifs(newGifs);
  }

  const handleSearch = async ( query:string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    const currentTerms = previousTerms.slice(0,4);
    currentTerms.unshift(query);

    setPreviousTerms ( currentTerms);
    const newgifs = await getGifsByQuery(query);

    setGifs(newgifs);
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" descriptions="Descubre y comparte el gif"/>

      {/* Buscador */}
      <SearchBar placeholder="Busca lo que quieras" onQuery = {handleSearch}/>

      {/*Buqueda previas*/}
      <PreviousSearches searches={previousTerms} onLabelClicked={handelTermClicked}/>

      {/* Gifs*/}
      <GifList gifs={gifs}/>
    </>
  );
};
