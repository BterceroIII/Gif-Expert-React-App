import { GifSchema } from "../utils/schema";

export default function GifGrid({ categor }: { categor: string[] }) {
  const getGifs = async () => {
    // Usa import.meta.env en lugar de process.env
    const url = `${import.meta.env.VITE_API_URL}?api_key=${import.meta.env.VITE_API_KEY}&q=${categor}&limit=20`;
    const resq = await fetch(url);
    const { data } = await resq.json();

    const gifs = data.map((img: { id: string; title: string; images: { downsized_medium: { url: string } } }) => {
      const gif = {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
      GifSchema.parse(gif);
      return gif;
    });

    return gifs;
  };

  getGifs();

  return (
    <>
      <ol>
        {categor.map((category) => (
          <div key={category}>
            <li>{category}</li>
          </div>
        ))}
      </ol>
    </>
  );
}