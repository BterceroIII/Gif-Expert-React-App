import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { GifList } from "./gifs/Components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de Gifs" descriptions="Descubre y comparte el gif"/>\

      {/* Buscador */}
      <SearchBar placeholder="Busca lo que quieras"/>

      {/*Buqueda previas*/}
      <PreviousSearches searches={['Goku', 'Invencible' ]}/>

      {/* Gifs*/}
      <GifList gifs={mockGifs}/>
    </>
  );
};
