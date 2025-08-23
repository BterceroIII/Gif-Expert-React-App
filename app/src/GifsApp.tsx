import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { GifList } from "./gifs/Components/GifList";
import useGif from "./gifs/Hooks/useGif";

export const GifsApp = () => {
  const {gifs, handelTermClicked,handleSearch,previousTerms} = useGif();

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
